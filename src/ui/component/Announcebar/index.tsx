import {Link} from "@tanstack/react-router";

export default function Announcebar(){
  return(
    <div className="bg-green-800 py-2 text-center">
      <Link to ="/" className="!text-white hover:underline text-sm">FREE SHIPPING FOR ORDERS $500+</Link>
    </div>
  );
}