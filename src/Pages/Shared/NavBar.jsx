import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthContext';
import { toast } from 'react-toastify';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../hooks/useCart';



const NavBar = () => {
  const { userStatus, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout().then(() => {
      toast.success("Logout successful!");
      navigate("/login");
    })
  }

  const navItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/menu">Our Menu</NavLink></li>
    <li><NavLink to="/order">Order Now</NavLink></li>
    <li><NavLink to="/secret">Secret</NavLink></li>

    {
      !userStatus ? <li><NavLink to="/login">Login</NavLink></li> : <>
        <li><button onClick={logoutHandler} className="btn btn-sm">Logout</button></li>

        <Link to="/dashboard/cart">
          <button className="btn btn-sm">
            <FaShoppingCart />
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </>
    }
  </>;

  return (
    <div className='container mx-auto'>
      <div className="navbar fixed z-10 opacity-70 bg-black text-white max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-3 menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;