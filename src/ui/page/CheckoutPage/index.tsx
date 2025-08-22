import {useLocation, useParams} from "@tanstack/react-router";
import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";

export default function CheckoutPage(){
  const params=useParams({from:"/checkout/$transactionId"});
  const location=useLocation();

  return (
    <div className="shopping-cart-container">
      <Announcebar/>
      <TopNavbar/>
      <h1>Checkout Page!</h1>
      <h2>TransactionId is {params.transactionId}</h2>
      <h3>Pathname: {location.pathname}</h3>
    </div>
  )
}