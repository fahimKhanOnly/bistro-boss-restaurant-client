import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import loadingEffect from '../assets/undraw_loading_65y2.svg'

const PrivateRoutes = ({children}) => {
 const navigate = useNavigate();
 const location = useLocation();
 const { userStatus, loadingStatus} = useContext(AuthContext);

 if(loadingStatus){
  return <div><img src={loadingEffect} alt="" /></div>
 }
 if(userStatus){
  return children;
 }
 return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoutes;