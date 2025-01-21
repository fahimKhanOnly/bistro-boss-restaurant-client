const MenuItems = ({ items }) => {
  const { name, image, recipe, price } = items;
  return (
    <div className="flex gap-4">
      <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px]" src={image} />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p className="">{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItems;