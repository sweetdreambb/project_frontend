import NavbarStart from "./component/NavbarStart.tsx";
import NavbarCenter from "./component/NavbarCenter.tsx";
import NavbarEnd from "./component/NavbarEnd.tsx";

export default function TopNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm h-20 px-8">
      <NavbarStart/>
      <NavbarCenter/>
      <NavbarEnd/>
    </div>
  )
    ;
}
