import CartItemTableRow from "./CartItemTableRow.tsx";
import type {GetCartItemDto} from "../../../../data/cart/cartItem.type.ts";

interface Props {
  getCartItemDtoList: GetCartItemDto[];
  estTotal: number;
  handleQuantityChange: (pid: number, quantity: number) => void;
  handleDelete: (pid: number) => void;
}

export default function CartItemTable({
                                        getCartItemDtoList,
                                        estTotal,
                                        handleQuantityChange,
                                        handleDelete
                                      }: Props) {
  return (
    <div className="overflow-x-auto text-primary">
      <table className="table">

        <tbody>
        {
          getCartItemDtoList.map((Dto) =>
            <CartItemTableRow
              key={Dto.pid} // Add key prop for React list rendering
              getCartItemDto={Dto}
              handleQuantityChange={handleQuantityChange}
              handleDelete={handleDelete}
            />
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