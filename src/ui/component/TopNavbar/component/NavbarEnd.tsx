import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@tanstack/react-router";

export default function NavbarEnd(){
  return (
    <div className="navbar-end">
      <Link to="/shoppingcart" className="btn text-primary">
        <FontAwesomeIcon icon={faCartShopping}/>
        Shopping Cart
      </Link>
    </div>
  );
}