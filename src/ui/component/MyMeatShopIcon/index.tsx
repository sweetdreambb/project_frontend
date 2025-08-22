import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruckFast} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@tanstack/react-router";

export default function MyMeatShopIcon(){
  return (
    <Link to="/" className="btn-lg btn-ghost text-xl text-primary italic font-extrabold inline-flex items-center mx-4">
      <FontAwesomeIcon icon={faTruckFast} bounce size="2x"/>
      <div className="m-4">
        My<br/>
        Meat<br/>
        Shop
      </div>
    </Link>
  );
}