import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import {Link} from "@tanstack/react-router";
import StockAvailableTag from "../StockAvailableTag";
import StockOutTag from "../StockOutTag";

interface Props {
  getAllProductDto: GetAllProductDto;
}

export default function ProductCard({getAllProductDto}: Props) {

  const renderAddToCartBtn=()=>(
    !getAllProductDto.hasStock
      ? (
        <button
          className="btn btn-disabled btn-block text-primary text-lg rounded-lg"
          style={{borderColor: '#304d6e', borderWidth: '2px', opacity: 0.5}}
        >
          Sold Out!
        </button>
      ) : (
        <button
          className="btn btn-outline btn-block text-primary text-lg rounded-lg"
          style={{borderColor: '#304d6e', borderWidth: '2px'}}
        >
          <Link to={"/product/$productId"} params={{productId: getAllProductDto.pid.toString()}}>
            Add to cart
          </Link>
        </button>
      )
  )

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto">
      <figure className="rounded-3xl">
        <Link to={"/product/$productId"} params={{productId:getAllProductDto.pid.toString()}}>
        <img
          src={getAllProductDto.imageUrl}
        />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-lg">${getAllProductDto.price.toLocaleString()}</h2>
        <Link to={"/product/$productId"} params={{productId: getAllProductDto.pid.toString()}} className="h-20">
          <p className="card-title font-normal text-lg">{getAllProductDto.name}</p>
        </Link>

        {getAllProductDto.hasStock
          ? (
            <StockAvailableTag/>
          ) : (
            <StockOutTag/>
          )}
        <div className="card-actions justify-end">
          {renderAddToCartBtn()}
        </div>
      </div>
    </div>
  );
}