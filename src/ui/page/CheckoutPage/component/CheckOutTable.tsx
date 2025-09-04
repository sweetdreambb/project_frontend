import CheckOutTableRow from "./CheckOutTableRow.tsx";
import type {TransactionDto} from "../../../../data/transaction/transaction.type.ts";

interface Props{
  transactionDto: TransactionDto;
}

export default function CheckOutTable({transactionDto}:Props){
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <tr>
          <th/>
          <th>Name</th>
          <th>Quantity</th>
          <th className="text-right">Sub-total</th>
        </tr>
        </thead>
        <tbody>
        {
          transactionDto.items.map((item,i=1)=>(
            <CheckOutTableRow
              key={item.tpid}
              index={++i}
              item={item}
            />
            )
          )
        }
         </tbody>
        {/* foot */}
        <tfoot>
        <tr>
          <th className="text-primary text-2xl">Total</th>
          <th></th>
          <th></th>
          <th className="text-primary text-2xl text-right">${transactionDto.total.toLocaleString()}</th>
          <th></th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}