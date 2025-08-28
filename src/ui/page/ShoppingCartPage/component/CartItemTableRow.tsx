import StockAvailableTag from "../../../component/StockAvailableTag";
import QuantitySelector from "../../../component/QuantitySelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import type {GetCartItemDto} from "../../../../data/cart/cartItem.type.ts";
import StockOutTag from "../../../component/StockOutTag";
import {deleteCartItem, patchCartItem} from "../../../../api/cartItem/cartItemApi.ts";
import {useState} from "react";

interface Props {
  getCartItemDto: GetCartItemDto;
  handleQuantityChange: (pid: number, quantity: number) => void;
  handleDelete: (pid: number) => void;
}

export default function CartItemTableRow({
                                           getCartItemDto,
                                           handleQuantityChange,
                                           handleDelete
                                         }: Props) {

  const [isLoading, setIsLoading] = useState(false);

  const handleMinus = async () => {
    if (getCartItemDto.cartQuantity > 1) {
      setIsLoading(true);
      await patchCartItem(getCartItemDto.pid, getCartItemDto.cartQuantity - 1);
      handleQuantityChange(getCartItemDto.pid, getCartItemDto.cartQuantity - 1);
      setIsLoading(false);
    }
  }


  const handlePlus = async () => {
    if (getCartItemDto.cartQuantity < getCartItemDto.stock) {
      setIsLoading(true);
      await patchCartItem(getCartItemDto.pid, getCartItemDto.cartQuantity + 1);
      handleQuantityChange(getCartItemDto.pid, getCartItemDto.cartQuantity + 1);
      setIsLoading(false);
    }
  }

  const handleDeleteButton = async () => {
    setIsLoading(true);
    await deleteCartItem(getCartItemDto.pid);
    handleDelete(getCartItemDto.pid);
    setIsLoading(false);
  }

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
              getCartItemDto.stock > 0
                ? <StockAvailableTag/>
                : <StockOutTag/>
            }
          </div>
        </div>
      </td>
      <td>
        <QuantitySelector
          stock={getCartItemDto.stock}
          quantity={Math.min(getCartItemDto.cartQuantity, getCartItemDto.stock)}
          handleQuantityPlusOne={handlePlus}
          handleQuantityMinusOne={handleMinus}
          isLoading={isLoading}
        />
      </td>
      <td
        className="text-right font-bold text-black">${(getCartItemDto.price * getCartItemDto.cartQuantity).toLocaleString()}</td>
      <td>
        <button
          onClick={handleDeleteButton}
          disabled={isLoading}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
          />
        </button>
      </td>
    </tr>
  );
}