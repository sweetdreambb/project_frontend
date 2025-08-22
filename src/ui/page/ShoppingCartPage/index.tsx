import {useLocation} from "@tanstack/react-router";
import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";

export default function ShoppingCartPage(){
  const location=useLocation();
  return (
    <div className="shopping-cart-container">
      <Announcebar/>
      <TopNavbar/>
      <h1>Shopping Cart Page!</h1>
      <h3>Pathname: {location.pathname}</h3>
    </div>
  )
}