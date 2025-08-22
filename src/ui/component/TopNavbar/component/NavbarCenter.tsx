import {Link} from "@tanstack/react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCow, faDrumstickBite, faPiggyBank, faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";

export default function NavbarCenter() {

  const loginUser = useContext(LoginUserContext);

  return (
    <div className="navbar-center hidden  lg:flex">
      <ul className="menu menu-horizontal flex items-center px-1 text-primary">
        <li className="flex items-center font-bold italic px-2 pointer-events-none hover:bg-transparent">
          Hello! {loginUser && <span>{loginUser.email}</span>}
        </li>
        {/*Products dropdown*/}
        <li className="dropdown">
          {/*removed detail tag, Trigger*/}
          {/*removed summary, use div instead*/}
          <div tabIndex={0} role="button" className="my-0 mx-1">Products</div>
          {/*  Dropdown, changed className*/}
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-primary"
          >
            <li>
              <Link to="/category/Beef">
                <FontAwesomeIcon icon={faCow} beat/>
                {/*add removed style color #304d6e*/}
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
      </ul>
    </div>

  );
}