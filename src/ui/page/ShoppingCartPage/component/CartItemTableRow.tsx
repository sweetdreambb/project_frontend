import StockAvailableTag from "../../../component/StockAvailableTag";
import QuantitySelector from "../../../component/QuantitySelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

export default function CartItemTableRow(){
  return (
    <tr>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://themeatclub.com.sg/cdn/shop/files/BeefSirloinSteak-GrassFed_Australia_250g_Frozen_550x.webp?v=1754465608"
              />
            </div>
          </div>
          <div>
            <div className="text-base">Chicken Tenders (Crumbed) - Cage Free | Australia | 400g | Frozen</div>
            <StockAvailableTag/>
          </div>
        </div>
      </td>
      <td>
        <QuantitySelector
          quantity={1}
          handleQuantityPlusOne={()=> {} }
          handleQuantityMinusOne={()=> {}}
        />
      </td>
      <td className="text-right font-bold text-black">$100.00</td>
      <td>
        <FontAwesomeIcon icon={faTrashCan} />
      </td>
    </tr>
  );
}