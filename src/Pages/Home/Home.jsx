import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Featured from "./Featured";
import Menu from "./Menu";
import Order from "./Order";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner/>
      <Order/>
      <Menu/>
      <Featured/>
    </div>
  );
};

export default Home;