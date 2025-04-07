import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const handleSearchClick = () => {
    if (location.pathname !== "/collection") {
      navigate("/collection"); // Redirect to collection page if not on it
    } else {
      setShowSearch(true); // Show the search if already on the collection page
    }
  };

  return (
    <div className="flex item-center justify-between py-5  font-semibold">
      <ul className="inline-flex items-end text-4xl ">
        <Link to="/">
          <img src={assets.logo} className="w-14" alt="" />
        </Link>
        <NavLink
          to="/"
          className="hidden lg:flex text-gray-700 font-bold sm:absolute px-11 py-2"
        >
          zyShop
        </NavLink>
      </ul>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 pt-6">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <h2>HOME</h2>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <h2>COLLECTION</h2>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <h2>ABOUT</h2>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <h2>CONTACT</h2>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          onClick={handleSearchClick} // Use the new function
          alt=""
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
            onClick={() => (token ? null : navigate("/login"))}
          />
          {/* DROPDOWN */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
          alt=""
        />
      </div>

      {/* SIDEBAR MENU FOR SMALL SCREEN */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-20 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/"}
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/collection"}
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/about"}
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/contact"}
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
