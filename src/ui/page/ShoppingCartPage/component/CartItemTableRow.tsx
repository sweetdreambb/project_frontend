import StockAvailableTag from "../../../component/StockAvailableTag";
import QuantitySelector from "../../../component/QuantitySelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import type {GetCartItemDto} from "../../../../data/cart/cartItem.type.ts";
import StockOutTag from "../../../component/StockOutTag";

interface Props{
  getCartItemDto: GetCartItemDto;
}

export default function CartItemTableRow({getCartItemDto}:Props){



  return (
    <tr>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={getCartItemDto.imageUrl}
              />
            </div>
          </div>
          <div>
            <div className="text-base">{getCartItemDto.name}</div>
            {
              getCartItemDto.stock>0
              ?<StockAvailableTag/>
                :<StockOutTag/>
            }
          </div>
        </div>
      </td>
      <td>
        <QuantitySelector
          quantity={Math.min(getCartItemDto.cartQuantity, getCartItemDto.stock)}
          handleQuantityPlusOne={()=> {} }
          handleQuantityMinusOne={()=> {}}
        />
      </td>
      <td className="text-right font-bold text-black">${(getCartItemDto.price*getCartItemDto.cartQuantity).toLocaleString()}</td>
      <td>
        <FontAwesomeIcon icon={faTrashCan} />
      </td>
    </tr>
  );
}