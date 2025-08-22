export default function StockOutTag(){
  return (
    <div className="badge badge-error text-primary">
      <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="currentColor">
          <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                fill="currentColor" strokeWidth={0}></rect>
          <path
            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
            strokeWidth={0} fill="currentColor"></path>
        </g>
      </svg>
      Stock Out
    </div>
  );
}