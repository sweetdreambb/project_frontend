import NavbarStart from "./component/NavbarStart.tsx";
import NavbarCenter from "./component/NavbarCenter.tsx";
import NavbarEnd from "./component/NavbarEnd.tsx";

interface Props {
  onCategoryChange: (category: string)=> void;
}

export default function TopNavbar({onCategoryChange}:Props) {

  return (
    <div className="navbar bg-base-100 shadow-sm h-20 px-8">
      <NavbarStart
      onCategoryChange={onCategoryChange}
      />
      <NavbarCenter
      onCategoryChange={onCategoryChange}
      />
      <NavbarEnd/>
    </div>
  )
    ;
}
