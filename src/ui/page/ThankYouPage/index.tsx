import {useLocation} from "@tanstack/react-router";
import TopNavbar from "../../component/TopNavbar";

export default function ThankYouPage(){
  const location=useLocation();
  return (
    <div className="shopping-cart-container">
      <TopNavbar/>
      <h1>Thank You Page!</h1>
      <h3>Pathname: {location.pathname}</h3>
    </div>
  )
}