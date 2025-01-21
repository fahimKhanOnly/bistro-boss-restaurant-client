import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu/>
      },
      {
        path: "/order",
        element: <Order/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <Register/>
      },
      {
        path: "/secret",
        element: <PrivateRoutes><Secret/></PrivateRoutes>
      }
    ]
  },
]);