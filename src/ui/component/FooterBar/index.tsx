import MyMeatShopIcon from "../MyMeatShopIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function FooterBar(){
  return (

  <footer className="bg-white border-t">
    <div className="flex justify-center text-primary items-center">
    <MyMeatShopIcon/>
      <FontAwesomeIcon icon={faInstagram} className="mx-2 text-2xl"/>
      <FontAwesomeIcon icon={faFacebook} className="mx-2 text-2xl"/>
    </div>
    <div className="max-w-7xl mx-auto px-4 pb-4 text-center text-primary">
      <p>&copy; 2025 MyMeatShop. Fresh quality guaranteed.</p>
    </div>
  </footer>

);
}