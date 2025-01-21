import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';


const Order = () => {
 const [getMenu] = useMenu();

 const salads = getMenu.filter(item => item.category === 'salad');
 const pizza = getMenu.filter(item => item.category === 'pizza');
 const soups = getMenu.filter(item => item.category === 'soup');
 const desserts = getMenu.filter(item => item.category === 'dessert');
 const drinks = getMenu.filter(item => item.category === 'drink');
 return (
  <div className='py-[100px]'>
   <Tabs>
    <TabList>
     <Tab>Salads</Tab>
     <Tab>Pizza</Tab>
     <Tab>Soups</Tab>
     <Tab>Desserts</Tab>
     <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
     <h2>Salads</h2>
     <div className='grid grid-cols-3 gap-6'>
      {salads.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
     </div>
    </TabPanel>
    <TabPanel>
     <h2>Pizza</h2>
     <div className='grid grid-cols-3 gap-6'>
      {pizza.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
     </div>
    </TabPanel>
    <TabPanel>
     <h2>Soups</h2>
     <div className='grid grid-cols-3 gap-6'>
      {soups.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
     </div>
    </TabPanel>
    <TabPanel>
     <h2>Desserts</h2>
     <div className='grid grid-cols-3 gap-6'>
      {desserts.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
     </div>
    </TabPanel>
    <TabPanel>
     <h2>Drinks</h2>
     <div className='grid grid-cols-3 gap-6'>
      {drinks.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
     </div>
    </TabPanel>
   </Tabs>
  </div>
 );
};

export default Order;