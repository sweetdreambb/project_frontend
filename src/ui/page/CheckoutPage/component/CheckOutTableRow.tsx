interface Props{
  index: number;
}

export default function CheckOutTableRow({index}:Props){
  return (
    <tr>
      <th>{index}</th>
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
            <div className="font-bold">Beef Sirloin Steak - Grass Fed | Australia | 250g</div>
            <div className="text-sm opacity-50">$20.00</div>
          </div>
        </div>
      </td>
      <td>
        100
      </td>
      <td className="text-right">$2,000</td>
    </tr>
  );
}