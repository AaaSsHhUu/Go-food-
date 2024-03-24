import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import NavContext from "../../context/NavContext";
import ReactDOM  from "react-dom";
import Cart from "../Cart/Cart";
import { useCart, useDispatchCart } from "../../context/ContextReducer";
import { toast } from "react-toastify";

const Navbar = () => {
  const { searchVal, setSearchVal,isLoggedIn,setIsLoggedIn } = useContext(NavContext);
  const [navState, setNavState] = useState("");
  const [showCart, setShowCart] = useState(false);
  const cartData = useCart();
  const dispatchCart = useDispatchCart();

  // checking if the user is logged in or not on first render
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("accessToken"));
  },[])

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // getting current user accessToken
    localStorage.removeItem("userEmail"); // getting current user email
    toast.success("Logged out successfully",{
      position : "top-center",
      autoClose : 3000,
      closeOnClick : true,
      hideProgressBar : false
    }),
    setIsLoggedIn(false);
  }

  return (
    <nav className="bg-green-600 text-white py-4 px-6 w-full flex flex-col gap-3 md:flex-row md:justify-around items-center">
      {/* Logo */}
      <div className="font-bold text-3xl">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-16 inline-block cursor-pointer"
          />
          GoFood
        </Link>
      </div>

      {/* Searchbar */}
      <div className="flex items-center justify-center mx-auto sm:w-full md:w-5/12">
        <input
          type="text"
          placeholder="What do you want to eat?"
          className="border-none sm:2/4 md:w-3/4 outline-none rounded-l-md px-3 py-2 text-gray-700"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="bg-green-400 text-white font-bold rounded-r-md py-2 px-3">
          Search
        </button>
        <div className="md:hidden text-xl ml-4">
          <RiMenu2Line
            onClick={() => setNavState(navState === "" ? "hidden" : "")}
          />
        </div>
      </div>

      {/* Nav Links */}
      <div className={navState}>
        <ul className="flex flex-col md:flex-row text-white sm:text-md sm:gap-3 md:gap-6 md:text-lg font-bold list-none items-center">
          <li className="hover:bg-green-500 rounded-md py-1 px-2">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="hover:bg-green-500 rounded-md py-1 px-2">
            <button onClick={() => setShowCart(true)} className="flex relative">
                My Cart
                { cartData.length > 0 && <span className="w-4 h-4 bg-red-600 text-white text-xs rounded-full">{cartData.length}</span>}
            </button>
          </li>
          {showCart && ReactDOM.createPortal(
            <Cart data = {cartData} dispatch={dispatchCart} setShowCart={setShowCart} /> , document.getElementById("cart")
          )}

          <li className="hover:bg-green-500 rounded-md py-1 px-2">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {
            isLoggedIn ? 
             <li className="hover:bg-green-500 rounded-md py-1 px-2">
                 <NavLink to="/myorder">My Orders</NavLink>
             </li>
             : 
             <li className="hover:bg-green-500 rounded-md py-1 px-2">
                <NavLink to="/login">Login</NavLink>
             </li>
          }
          {
            isLoggedIn ? 
             <li className="hover:bg-green-500 rounded-md py-1 px-2">
                 <NavLink type="button" onClick={handleLogout}>Logout</NavLink>
             </li>
             : 
             <li className="hover:bg-green-500 rounded-md py-1 px-2">
                 <NavLink to={'/signup'} >Signup</NavLink>
             </li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
