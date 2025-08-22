import {Link} from "@tanstack/react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCow,
  faDrumstickBite,
  faPiggyBank, faRightFromBracket,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import MyMeatShopIcon from "../../MyMeatShopIcon";
import {useContext} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";

export default function NavbarStart() {

  const loginUser = useContext(LoginUserContext);

  return (
    <div className="navbar-start">
      {/*Mobile dropdown menu*/}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#304d6e"
              // stroke color applied
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {/*Dropdown list*/}
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content bg-base-100 rounded-box
           z-50 mt-3 w-52 p-2 shadow text-primary">
          {/*change to z-50 instead of z-[1]*/}
          <li className="flex justify-start font-bold italic px-2 py-2">
            Hello! {loginUser &&loginUser.email}
          </li>
          <li>
            <Link to="/">Products</Link>
            <ul className="p-2">
              <li>
                <Link to="/category/Beef">
                  <FontAwesomeIcon icon={faCow} beat/>
                  Beef
                </Link>
              </li>
              <li>
                <Link to="/category/Chicken">
                  <FontAwesomeIcon icon={faDrumstickBite} beat/>
                  Chicken
                </Link>
              </li>
              <li>
                <Link to="/category/Pork">
                  <FontAwesomeIcon icon={faPiggyBank} beat/>
                  Pork
                </Link>
              </li>
            </ul>
          </li>
          <li>
            {
              loginUser
                ?(
                  <Link
                    to="/login"
                    className="text-white mx-1 bg-[#304d6e]"
                  >
                    <FontAwesomeIcon icon={faRightFromBracket}/>
                    Logout
                  </Link>
                ):(

                  <Link to="/login" className="text-primary mx-1">
                    <FontAwesomeIcon icon={faUser}/>
                    Login
                  </Link>

                )
            }
          </li>
          <li className="mt-2">
            <Link to="/shoppingcart">
              <FontAwesomeIcon icon={faCartShopping}/>
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
      <MyMeatShopIcon/>
    </div>
  );
}