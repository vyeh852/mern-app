import React from "react";
import {Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Sidemenu from "./components/Sidemenu";

export default function App() {
  const [menuState,toggleMenuState] = React.useState(false)
  return (
    <div className="App">
      <Navbar toggleMenu={()=>{toggleMenuState(!menuState)}}/>
      <Sidemenu menuState={menuState} toggleMenu={()=>{toggleMenuState(!menuState)}}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
      </Switch>
    </div>
  );
}

