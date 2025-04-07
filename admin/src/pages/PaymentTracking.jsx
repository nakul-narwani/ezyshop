import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";
import { Bar } from "react-chartjs-2"; // Import the Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"; // Chart.js registration

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [totalDeliveredAmount, setTotalDeliveredAmount] = useState(0);
  const [ordersByStatus, setOrdersByStatus] = useState({
    placed: 0,
    packing: 0,
    shipped: 0,
    outForDelivery: 0,
    delivered: 0,
  });

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        const fetchedOrders = res.data.orders.reverse();
        setOrders(fetchedOrders);

        // Calculate total amount for delivered orders
        const totalDelivered = fetchedOrders
          .filter((order) => order.status === "Delivered")
          .reduce((acc, order) => acc + order.amount, 0);
        setTotalDeliveredAmount(totalDelivered);

        // Count the number of orders for each status
        const statusCount = { placed: 0, packing: 0, shipped: 0, outForDelivery: 0, delivered: 0 };
        fetchedOrders.forEach((order) => {
          if (order.status === "Order Placed") statusCount.placed += 1;
          if (order.status === "Packing") statusCount.packing += 1;
          if (order.status === "Shipped") statusCount.shipped += 1;
          if (order.status === "Out for delivery") statusCount.outForDelivery += 1;
          if (order.status === "Delivered") statusCount.delivered += 1;
        });
        setOrdersByStatus(statusCount);

        // Debugging logs
        console.log(fetchedOrders);
        console.log("Total Delivered Amount:", totalDelivered);
        console.log("Orders by Status:", statusCount);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (res.data.success) {
        await fetchAllOrders();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  // Data for Total Delivered Amount Bar Chart
  const totalDeliveredAmountData = {
    labels: ["Delivered Orders"],
    datasets: [
      {
        label: "Total Amount Received",
        data: [totalDeliveredAmount],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Orders by Status Bar Chart (Including "Packing" and "Out for delivery")
  const ordersByStatusData = {
    labels: [
      "Order Placed",
      "Packing",
      "Shipped",
      "Out for delivery",
      "Delivered",
    ],
    datasets: [
      {
        label: "Order Count by Status",
        data: [
          ordersByStatus.placed,
          ordersByStatus.packing,
          ordersByStatus.shipped,
          ordersByStatus.outForDelivery,
          ordersByStatus.delivered,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3 className="font-semibold">Order Page</h3>

      {/* Orders List
      <div>
        {orders.map((order, i) => (
          <div
            key={i}
            className="rounded-md bg-black text-[#c596a5] grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-[#c596a5] p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm "
          >
            <img src={assets.parcel_icon} className="w-12" alt="" />
            <div>
              <div>
                {order.items.map((item, i) => {
                  if (i === order.items.length - 1) {
                    return (
                      <p key={i} className="py-0.5">
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={i} className="py-0.5">
                        {item.name} x {item.quantity} <span>{item.size}</span> ,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mb-2 mt-3 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Items : {order.items.length}
              </p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? "Done" : "Pending"}</p>
              <p>Date : {new Date(order.date).toLocaleString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>

            <select
              value={order.status}
              className="bg-zinc-900 p-2 font-semibold"
              onChange={(e) => statusHandler(e, order._id)}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div> */}

      {/* Graphs */}
      <div className="my-8">
        {/* Total Delivered Amount Bar Chart */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Total Amount Received for Delivered Orders</h4>
          <Bar data={totalDeliveredAmountData} options={{ responsive: true }} height={200} />
        </div>

        {/* Orders by Status Bar Chart (Including "Packing" and "Out for delivery") */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Orders Count by Status</h4>
          <Bar data={ordersByStatusData} options={{ responsive: true }} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Order;
