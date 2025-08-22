import {Link} from "@tanstack/react-router";

export default function Announcebar(){
  return(
    <div className="bg-green-800 py-2 text-center">
      <Link to ="/" className="!text-white hover:underline text-sm">ORDER BEFORE 2PM FOR NEXT DAY DELIVERY</Link>
    </div>
  );
}