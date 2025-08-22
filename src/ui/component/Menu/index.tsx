import {faCow, faDrumstickBite, faPiggyBank, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@tanstack/react-router";

export default function Menu() {
  return (
    // add div to wrap the whole menu
    <div className="lg:h-full lg:sticky lg:top-0 p-4">
      {/*  add lg:menu-vertical, add lg: h-fit*/}
      <ul
        className="menu bg-transparent lg:menu-vertical menu-horizontal rounded-box lg:h-fit gap-4 lg:grid lg:grid-cols-2">
        <Link to="/">
          <button className="btn-square w-25 h-25 bg-base-200 rounded-2xl text-lg cursor-pointer hover:bg-base-300">
            <FontAwesomeIcon icon={faUtensils} className="mx-2"/>
            <br/>
            ALL
          </button>
        </Link>
        <Link to="/category/Beef">
          <button className="btn-square h-25 w-25 bg-base-200 rounded-2xl text-lg cursor-pointer hover:bg-base-300">
            <FontAwesomeIcon icon={faCow} beat className="mx-2"/>
            <br/>
            Beef
          </button>
        </Link>
        <Link to="/category/Chicken">
          <button className="btn-square h-25 w-25 bg-base-200 rounded-2xl text-lg cursor-pointer hover:bg-base-300">
            <FontAwesomeIcon icon={faDrumstickBite} beat className="mx-2"/>
            <br/>
            Chicken
          </button>
        </Link>
        <Link to="category/Pork">
          <button className="btn-square h-25 w-25 bg-base-200 rounded-2xl text-lg cursor-pointer hover:bg-base-300">
            <FontAwesomeIcon icon={faPiggyBank} beat className="mx-2"/>
            <br/>
            Pork
          </button>
        </Link>
      </ul>
    </div>
  );
}