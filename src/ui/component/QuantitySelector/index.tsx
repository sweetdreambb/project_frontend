import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleMinus, faCirclePlus} from "@fortawesome/free-solid-svg-icons";

interface Props {
  quantity: number;
  handleQuantityMinusOne: () => void;
  handleQuantityPlusOne: () => void;
}

export default function QuantitySelector({
                                           quantity,
                                           handleQuantityMinusOne,
                                           handleQuantityPlusOne
                                         }: Props) {
  return (
    <div
      className="rounded-lg min-w-full h-10 flex justify-between items-center bg-base-100 text-base lg:text-lg px-2 py-1 my-2"
      style={{borderColor: '#304d6e', borderWidth: '2px'}}
    >
      <button
        className="btn btn-ghost btn-xs btn-square p-0 bg-base-100 text-primary text-base lg:text-lg"
        onClick={handleQuantityMinusOne}
      >
        <FontAwesomeIcon icon={faCircleMinus}/>
      </button>
      <p>{quantity}</p>
      <button
        className="btn btn-ghost  btn-xs btn-square p-0 bg-base-100 text-primary text-base lg:text-lg"
        onClick={handleQuantityPlusOne}
      >
        <FontAwesomeIcon icon={faCirclePlus}/>
      </button>

    </div>
  );
}