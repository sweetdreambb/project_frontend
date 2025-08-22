import QuantitySelector from "../../component/QuantitySelector";
import {Link} from "@tanstack/react-router";
import type {ProductDto} from "../../../data/product/product.type.ts";
import StockAvailableTag from "../../component/StockAvailableTag";
import StockOutTag from "../../component/StockOutTag";

interface Props {
  productDto: ProductDto;
  quantity: number;
  handleQuantityMinusOne: () => void;
  handleQuantityPlusOne: () => void;
}

export default function ProductDetailContent({
                                               productDto,
                                               quantity,
                                               handleQuantityMinusOne,
                                               handleQuantityPlusOne
                                             }: Props) {
  return (
    <div className="hero bg-base-200 min-h-full py-5 lg:py-10 px-4 lg:px-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={productDto.imageUrl}
          className="w-64  lg:w-96 xl:w-[400px] rounded-lg shadow-2xl"
        />
        <div className="ml-0 lg:ml-10 mt-6 lg:mt-0">
          <h1 className="text-2xl lg:text-3xl font-bold">{productDto.name}</h1>
          <h2 className="text-xl lg:text-2xl font-bold pt-3">${productDto.price.toLocaleString()}</h2>
          <p className="py-4 lg:py-6 text-sm lg:text-base">

            {productDto.description}
          </p>
          {productDto.stock>0
            ? (
              <StockAvailableTag/>
            ) : (
              <StockOutTag/>
            )}

          <QuantitySelector
            quantity={quantity}
            handleQuantityMinusOne={handleQuantityMinusOne}
            handleQuantityPlusOne={handleQuantityPlusOne}
          />
          {
            productDto.stock <= 0
            ? (

                <button
                  className="btn btn-disabled btn-block text-white text-base lg:text-lg rounded-lg"
                  style={{backgroundColor: '#304d6e', opacity: 0.5}}
                >

                  Add to cart

                </button>

              ):(
                <button
                  className="btn btn-block text-white text-base lg:text-lg rounded-lg"
                  style={{backgroundColor: '#304d6e',}}
                >
                  <Link to="/shoppingcart">
                    Add to cart
                  </Link>
                </button>
              )
          }
        </div>
      </div>
    </div>
  );
}