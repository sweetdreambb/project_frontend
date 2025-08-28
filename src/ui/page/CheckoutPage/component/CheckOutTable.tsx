import CheckOutTableRow from "./CheckOutTableRow.tsx";

export default function CheckOutTable(){
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <tr>
          <th>
          </th>
          <th>Name</th>
          <th>Quantity</th>
          <th className="text-right">Sub-total</th>
        </tr>
        </thead>
        <tbody>
        {
          Array.from({length:10}).map((_,i)=>(
            <CheckOutTableRow
              key={i}
              index={++i}
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
          <th className="text-primary text-2xl text-right">$20,000</th>
          <th></th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}