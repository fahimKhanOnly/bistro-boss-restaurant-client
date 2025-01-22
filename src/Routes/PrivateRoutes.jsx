import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import loadingEffect from '../assets/loadingEffects.svg'

const PrivateRoutes = ({children}) => {
 const location = useLocation();
 const { userStatus, loadingStatus} = useContext(AuthContext);

 if(loadingStatus){
  return <div><img src={loadingEffect} alt="" /></div>
 }
 if(userStatus){
  return children;
 }
 return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;