import {Link, useNavigate} from "@tanstack/react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCow,
  faDrumstickBite,
  faPiggyBank,
  faRightFromBracket,
  faUser,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {useContext, useRef} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";
import {signOut} from "../../../../authService/FirebaseAuthService.ts";

interface Props {
  onCategoryChange: (category: string)=> void;
}

export default function NavbarCenter({onCategoryChange}:Props) {

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
    <div className="navbar-center hidden  lg:flex">
      <ul className="menu menu-horizontal flex items-center px-1 text-primary">
        {loginUser &&
            <li className="flex items-center font-bold italic px-2 pointer-events-none hover:bg-transparent">
                <span>Hello! {loginUser.email}</span>
            </li>
        }
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
      </ul>
    </div>
  );
}