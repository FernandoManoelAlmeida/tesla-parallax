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

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__itemsContainer'>
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={ModelS}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
          first
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={ModelY}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={Model3}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={ModelX}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Item
          title="Lower Cost Solar Panels in America"
          desc="Money-back guarantee"
          desclick=""
          backGroundImg={Accessories}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
