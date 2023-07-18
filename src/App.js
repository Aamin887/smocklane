import Navbar from "./components/navbar/nav";
import './assets/styles/App.css'
import Header from "./components/header/header";
import Footer from './components/footer/footer'
import WhatWeDo from "./components/whatwedo/whatwedo";
import Products from "./components/products/products";

// import { Route } from "react-router-dom";
// import OfferCard from "./shared/serviceOffer";
// import bgImage from './assets/images/product_1.png'
// import ProductCard from "./shared/productCard";

function App() {
  return (
    <div className="App">
      {/* navigation bar */}
      <Navbar logo={'sl'}/>

      {/* header */}
      <Header />

      {/* services */}
      <WhatWeDo />

      {/* products page */}

      <Products />
      
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
