import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems";

const Menu = () => {
 const [getMenu] = useMenu();
 return (
  <div className="py-[100px]">
   <Helmet>
    <title>Bistro | Menu</title>
   </Helmet>

   <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"} />

   <div className="grid md:grid-cols-2 gap-4">
    {getMenu.map(menu => <MenuItems key={menu._id} items={menu} />)}
   </div>
  </div>
 );
};

export default Menu;