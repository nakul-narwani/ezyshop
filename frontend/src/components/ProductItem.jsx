import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
<Link to={`/product/${id}`} className="group relative w-full max-w-sm mx-auto cursor-pointer transition-transform transform hover:scale-105">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl group-hover:bg-gray-50">
    <div className="w-full h-44 sm:h-64 relative">
      <img
        src={image[0]}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-4 flex flex-col justify-between h-24 bg-white">
      <p className="text-sm font-semibold text-gray-900 line-clamp-2">{name}</p>
      <p className="text-sm font-medium text-gray-600 mt-1">
        <span className="text-indigo-600">{currency}{price}</span>
      </p>
    </div>
  </div>
</Link>

  

  );
};

export default ProductItem;
