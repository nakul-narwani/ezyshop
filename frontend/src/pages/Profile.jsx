import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { UserCircleIcon } from "@heroicons/react/24/solid";
const Profile = () => {
  const user = {
    name: "Naitik Mangal",
    email: "naitik@example.com",
    joined: "January 2024",
  };
  const { navigate } = useContext(ShopContext);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-500 text-sm">Manage your account information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-sm rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 border">
        {/* <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border"
        /> */}
        <UserCircleIcon className="w-24 h-24 text-gray-400" />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-400 mt-1">Joined: {user.joined}</p>
        </div>
        <button className="border px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
          Edit Profile
        </button>
      </div>

      {/* Sections */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {/* Navigate to Order Page */}
        <div className="p-5 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Your Orders</h3>
          <p className="text-sm text-gray-600">
            View and track your past orders.
          </p>
          <button onClick={() => navigate("/orders")} className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition">
            View Orders
          </button>
        </div>

        {/* Navigate to Cart Page */}
        <div className="p-5 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Your Cart</h3>
          <p className="text-sm text-gray-600">
            Check out the items in your cart.
          </p>

          <button
            onClick={() => navigate("/cart")}
            className="mt-4 px-6 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition"
          >
            Go to Cart
          </button>
        </div>

        {/* Navigate to Product Collection Page */}
        <div className="p-5 border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Explore Products</h3>
          <p className="text-sm text-gray-600">
            Browse our product collection and find what you love.
          </p>
          <button onClick={() => navigate("/cart")} className="mt-4 px-6 py-2 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
