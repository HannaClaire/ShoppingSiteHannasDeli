import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const App = () => {

  let [deliGoods, setDeliGoods] = useState([
    {
    id:1,
    name: "Morbier",
    description: "A delicately creamy french cheese with subtle fruity notes and a line of ash running through the middle.",
    price: 15,
    amount: 5,
    imageUrl: "https://www.thecheesesociety.co.uk/wp-content/uploads/2015/06/MORBIER-STACKED-1200x1197.jpg"
  },
  {
    id:2,
    name: "Han's chutters",
    description: "Spicy Apple and Walnut Chutney - a great way of using up that yearly glut of autumn apples",
    price: 6,
    amount:10,
    imageUrl: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/604536-1-eng-GB_spicy-apple-and-walnut-chutney.jpg"
  },
  {
    id:3,
    name: "Rustic Sourdough",
    description: "Tough as old boots, but fluffy on the inside",
    price: 7,
    amount: 6,
    imageUrl: "https://www.deliciousmagazine.co.uk/wp-content/uploads/20g"
  },
  {
    id:4,
    name: "Extreme Bobal",
    description: "From organic and low intervention winery grown at altitude this is a fresh wine full of red berry aromas celebrating a native variety that is well worth a try for merlot lovers looking for something different.",
    price: 15,
    amount:6,
    imageUrl: "https://images.ctfassets.net/6jpeaipefazr/2FibQdVjQqWK4plfptdEAh/accca1fce4cd63603b0a20270bc35f54/extreme-bobal.jpg?fm=avif&q=65&w=800&h=800&fit=pad"
  },
  {
    id:5,
    name: "AltituCoffee",
    description: "Columbia - Tastes of caramel, milk chocolate and orange",
    price: 12,
    amount:7,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2j43RLZKhadppcAcfxjhzAHaE8%26pid%3DApi&f=1&ipt=86d881b06eac68f7e1989fbc798e1473ac797ce546ad1a18fe3631160995a9aa&ipo=images"
  },
  {
    id:6,
    name: "'Booch",
    description: "Kombucha - Fruity, refreshing and bursting with nutritious goodness.",
    price: 12,
    amount:7,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnutricion360.es%2Fwp-content%2Fuploads%2F2020%2F04%2Fkombucha.jpg&f=1&nofb=1&ipt=df2d6a47346aa6a06916efc566944189f343e3936c5b4a8f7355292aa12ee480&ipo=images"
  
    }])

const [basketItems, setBasketItems] = useState([])

// spread operator takes the elements out of the array and puts into new array
//effectively adding the new product to the basket
const addToBasket = (productId) => {
  setBasketItems([...basketItems, productId])
  }





return (
  <>
    <div>Basket: {basketItems.length} </div>
  <Router>
    <NavBar />
      <Routes>
          <Route path="/" element ={<Home/>} /> 
          <Route path="/productList" element ={<ProductList deliGoods={deliGoods} addToBasket={addToBasket}/>} /> 

          <Route path="/Product/:id" element ={<Product deliGoods={deliGoods} addToBasket={addToBasket}/>} /> 
          <Route path="/Basket" element ={<Basket basketItems={basketItems} deliGoods={deliGoods}/>} /> 
      </Routes>

    </Router>
    
  </>
)
}
export default App;
