import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
 const [cart] = useCart();
 return (
  <div className="flex">
   <div className="w-64 min-h-full p-4 rounded-md bg-orange-400">
    <ul className="space-y-5 text-white text-xl rounded">
     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink>
     </li>
     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/dashboard/userHome"><FaHome /> User Home</NavLink>
     </li>

     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/dashboard/reservation"><FaAd /> Reservation </NavLink>
     </li>

     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/dashboard/review"> <MdRateReview /> Add a Review </NavLink>
     </li>

     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/dashboard/bookings"> <TbBrandBooking />My Bookings </NavLink>
     </li>

     <div className="divider"></div>

     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/"> <FaHome/> Home </NavLink>
     </li>

     <li className="bg-blue-600">
      <NavLink className="flex justify-center items-center gap-1" to="/menu"> <FaSearch/> Menu </NavLink>
     </li>

    </ul>
   </div>
   <div className="flex-1 p-5">
    <Outlet />
   </div>
  </div>
 );
};

export default Dashboard;