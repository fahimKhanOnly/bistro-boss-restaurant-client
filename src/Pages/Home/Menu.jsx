import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [getMenu] = useMenu();
  const popularItems = getMenu.filter(item => item.category === 'popular');

  return (
    <div className="my-20">
      <SectionTitle subHeading={"---Check it out---"} heading={"From our menu"} />

      <div className="grid md:grid-cols-2 gap-4">
          {popularItems.map(menu => <MenuItems key={menu._id} items={menu}/>)}
      </div>
    </div>
  );
};

export default Menu;