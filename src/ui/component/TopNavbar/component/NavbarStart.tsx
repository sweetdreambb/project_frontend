import {Link, useNavigate} from "@tanstack/react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCow,
  faDrumstickBite,
  faPiggyBank, faRightFromBracket,
  faUser, faUtensils
} from "@fortawesome/free-solid-svg-icons";
import MyMeatShopIcon from "../../MyMeatShopIcon";
import {useContext, useRef} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";
import {signOut} from "../../../../authService/FirebaseAuthService.ts";

interface Props {
  onCategoryChange: (category: string)=> void;
}

export default function NavbarStart({onCategoryChange}:Props) {

  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDialogElement>(null);
  const categories = [
    {key: "ALL", label: "ALL", icon: faUtensils},
    {key: "Beef", label: "Beef", icon: faCow},
    {key: "Chicken", label: "Chicken", icon: faDrumstickBite},
    {key: "Pork", label: "Pork", icon: faPiggyBank}
  ]

  const handleLogoutClick = () => {
    modalRef.current?.showModal();
  };

  const confirmLogout = async () => {
    modalRef.current?.close();
    await signOut();
    navigate({ to: "/" });
  };
  const renderLoginContainer = () => {
    if (loginUser) {
      return (
        <button
          className="text-white mx-1 bg-[#304d6e]"
          onClick={handleLogoutClick}
        >
          <FontAwesomeIcon icon={faRightFromBracket}/>
          Logout
        </button>
      )
    } else if (loginUser === null) {
      return (
        <Link to="/login" className="text-primary mx-1">
          <FontAwesomeIcon icon={faUser}/>
          Login
        </Link>
      )
    } else {
      return (
        <span className="loading loading-dots loading-xs text-primary"></span>
      )
    }
  }

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
           z-50 mt-3 w-80 p-2 shadow text-primary">
          {/*change to z-50 instead of z-[1]*/}
          {loginUser &&
              <li className="flex justify-start font-bold italic px-2 py-2">
                  <span>Hello! {loginUser.email}</span>
              </li>
          }
          <li>
            <Link to="/">Products</Link>
            <ul className="p-2">
              {
                categories.map((category)=>(
                  <li key={category.key}>
                    <button
                      onClick={()=>onCategoryChange(category.key)}
                      disabled={false}// You can add loading state here if needed
                    >
                      <FontAwesomeIcon
                        icon={category.icon}
                        beat
                      />
                      <span>{category.label}</span>
                    </button>
                  </li>
                ))
              }
            </ul>
          </li>
          <li>
            {renderLoginContainer()}
            {/* 🔑 Always mounted modal */}
            <dialog ref={modalRef} id="my_modal_5" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Logout</h3>
                <p className="py-4">Are you sure you want to log out?</p>
                <div className="modal-action flex gap-2">
                  <form method="dialog">
                    <button className="btn btn-outline">Cancel</button>
                  </form>
                  <button className="btn btn-error text-white" onClick={confirmLogout}>
                    Yes, Logout
                  </button>
                </div>
              </div>
            </dialog>
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