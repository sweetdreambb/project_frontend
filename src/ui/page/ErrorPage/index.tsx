import Announcebar from "../../component/Announcebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import ShoppingCheckTopbar from "../../component/ShoppingCheckTopbar";

export default function ErrorPage(){
  return (
    <div className="flex min-h-screen flex-col bg-background text-primary">
      <Announcebar/>
      <ShoppingCheckTopbar/>
      <div className="flex flex-col justify-center items-center gap-10 my-20 text-9xl">
        <p>OOPS!</p>
        <FontAwesomeIcon icon={faCircleXmark}/>
      </div>
    </div>
  );
}