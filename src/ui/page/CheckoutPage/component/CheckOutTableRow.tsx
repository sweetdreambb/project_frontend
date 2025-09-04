import type {Item} from "../../../../data/transaction/transaction.type.ts";
interface Props{
  index: number;
  item: Item;
}

export default function CheckOutTableRow({index, item}:Props){
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={item.productResponseDto.imageUrl}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.productResponseDto.name}</div>
            <div className="text-sm opacity-50">${item.productResponseDto.price.toLocaleString()}</div>
          </div>
        </div>
      </td>
      <td>
        {item.quantity}
      </td>
      <td className="text-right">${item.subtotal.toLocaleString()}</td>
    </tr>
  );
}