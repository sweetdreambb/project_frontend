import MyMeatShopIcon from "../MyMeatShopIcon";
import ShoppingCartIcon from "../ShoppingCartIcon";

export default function ShoppingCheckTopbar(){
  return (
    <div className="navbar bg-base-100 shadow-sm h-20 px-8 flex justify-between">
      <MyMeatShopIcon/>
      <ShoppingCartIcon/>
    </div>
  );
}