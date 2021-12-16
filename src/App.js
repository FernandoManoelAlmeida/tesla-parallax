import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';

const items = [
  {
    title: "Model S",
    desc: "Order Online for Touchless Delivery",
    desclick: "",
    backGroundImg: ModelS,
    leftBtnText: "Custom Order",
    leftBtnLink: "",
    rightBtnText: "Existing Inventory",
    rightBtnLink: "",
    twoButtons: true,
    first: true
  },
  {
    title: "Model Y",
    desc: "Order Online for Touchless Delivery",
    backGroundImg: ModelY,
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    twoButtons: true
  },
  {
    title: "Model 3",
    desc: "Order Online for Touchless Delivery",
    backGroundImg: Model3,
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    twoButtons: true
  },
  {
    title: "Model X",
    desc: "Order Online for Touchless Delivery",
    backGroundImg: ModelX,
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    twoButtons: true
  },
  {
    title: "Solar Panels",
    desc: "lowest Cost Solar Panels in America",
    backGroundImg: SolarPanels,
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    twoButtons: true
  },
  {
    title: "Solar Roof",
    desc: "Produce Clean Energy From Your Roof",
    backGroundImg: SolarRoof,
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    twoButtons: true
  },
  {
    title: "Accessories",
    backGroundImg: Accessories,
    leftBtnText: "Shop Now",
  },
]

function App() {
  console.log(items);

  return (
    <div className="App">
      <Header />
      <div className='app__itemsContainer'>
        {items.map((item) => (
          <Item {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
