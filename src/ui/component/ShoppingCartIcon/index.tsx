import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@tanstack/react-router";

export default function ShoppingCartIcon(){
  return(
    <Link to="/shoppingcart" className="btn text-primary">
      <FontAwesomeIcon icon={faCartShopping}/>
      Shopping Cart
    </Link>
  );
}