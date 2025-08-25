import CartItemTableRow from "./CartItemTableRow.tsx";

export default function CartItemTable(){
  return(
    <div className="overflow-x-auto text-primary">
      <table className="table">

        <tbody>
        {
          Array.from({length:10}).map(()=>
            <CartItemTableRow/>
          )
        }

        </tbody>
        {/* foot */}
        <tfoot>
        <tr>

          <th></th>
          <th className="text-right text-black text-lg">Estimated total:</th>
          <th className="text-right font-bold text-black text-lg">$200.00</th>
          <th></th>
        </tr>
        </tfoot>
      </table>


    </div>
  );
}