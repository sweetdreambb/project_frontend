import CheckOutTable from "./component/CheckOutTable.tsx";

export default function CheckoutPage() {

  return (
    <div>
      <div className="flex justify-start px-10 py-8 bg-[#304d6e]">
        <h1 className="font-thin text-white text-xl italic">Express checkout</h1>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 justify-center">
        <CheckOutTable/>

      </div>

    </div>
  )
}