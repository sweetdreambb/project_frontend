import Announcebar from "../../component/Announcebar";
import TopNavbar from "../../component/TopNavbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage(){
  return (
    <div className="flex min-h-screen flex-col bg-background text-primary">
      <Announcebar/>
      <TopNavbar/>
      <div className="flex flex-col justify-center items-center gap-10 my-20 text-9xl">
        <p>OOPS!</p>
        <FontAwesomeIcon icon={faCircleXmark}/>
      </div>
    </div>
  );
}