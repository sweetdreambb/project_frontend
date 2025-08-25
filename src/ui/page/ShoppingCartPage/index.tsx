import TopNavbar from "../../component/TopNavbar";
import "cally";
import DeliveryPreference from "./component/DeliveryPreference.tsx";
import CartItemTable from "./component/CartItemTable.tsx";
import FooterBar from "../../component/FooterBar";

export default function ShoppingCartPage() {
  return (

    <div>
      <TopNavbar/>

      <div className="flex justify-start px-10 py-8 bg-[#304d6e]">
        <h1 className="font-extrabold text-white text-xl">MY CART</h1>
        <div className="rounded-full bg-base-100 text-primary px-2 mx-2 font-bold"> 5</div>
      </div>
      <div className="flex justify-between px-10 pt-2">
        <p >Add $300 to unlock Free Shipping</p>
        <p className="font-bold">$500</p>
      </div>
      <div className="px-10 flex justify-center my-4">
        <progress className="progress progress-success w-full" value="200" max="500"></progress>
      </div>


      {/* Main content area with responsive layout */}
      <div className="flex flex-col lg:flex-row flex-1 mx-10">
        {/* horizontal on mobile, vertical on desktop */}
        <div className="lg:w-90 lg:flex-shrink-0">
          {/*add className to fix width on desktop and prevent shrinking*/}
          <DeliveryPreference/>
        </div>

        <div className="flex-1">
          <CartItemTable/>
          <button
            className="btn btn-success mt-4 text-2xl w-full my-4 text-black"
            type="submit"
          >
            Checkout
          </button>
        </div>

      </div>
      <FooterBar/>
    </div>
  )
}