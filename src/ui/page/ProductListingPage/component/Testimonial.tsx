import meal from "../assets/friends_meal.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="card bg-[#304d6e] grid h-70 place-items-center rounded-none">
        <div className="m-4">
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
          <p className="!text-white">
            7000+ satisfied customers
          </p>
          <br/>
          <h1 className="!text-white font-bold text-2xl">SKIP THE SUPERMARKET. GET IT DELIVERED.</h1>
          <br/>
          <h5 className="!text-white">Australian & NZ proteins direct from the farm to your door</h5>
        </div>
      </div>
      <div className="card bg-base-300 grid h-70 place-items-center rounded-none">
        <img src={meal} className="h-70 w-full object-cover"/>
      </div>
    </div>
  );
}