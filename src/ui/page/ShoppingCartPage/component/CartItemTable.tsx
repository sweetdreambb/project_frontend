import CartItemTableRow from "./CartItemTableRow.tsx";
import type {GetCartItemDto} from "../../../../data/cart/cartItem.type.ts";

interface Props{
  getCartItemDtoList: GetCartItemDto[];
  estTotal: number;
}

export default function CartItemTable({getCartItemDtoList, estTotal}:Props){


  return(
    <div className="overflow-x-auto text-primary">
      <table className="table">

        <tbody>
        {
          getCartItemDtoList.map((Dto)=>
            <CartItemTableRow getCartItemDto={Dto}/>
          )
        }

        </tbody>
        {/* foot */}
        <tfoot>
        <tr>

          <th></th>
          <th className="text-right text-black text-lg">Estimated total:</th>
          <th className="text-right font-bold text-black text-lg">${estTotal.toLocaleString()}</th>
          <th></th>
        </tr>
        </tfoot>
      </table>

    </div>
  );
}