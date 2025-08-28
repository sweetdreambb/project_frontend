import Announcebar from "../../component/Announcebar";
import FooterBar from "../../component/FooterBar";
import {useContext, useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";
import ProductDetailContent from "./component/ProductDetailContent.tsx";
import LoadingContainer from "../../component/LoadingContainer";
import {useNavigate, useParams} from "@tanstack/react-router";
import {getProductByPid} from "../../../api/product/productApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {putCartItem} from "../../../api/cartItem/cartItemApi.ts";
import ShoppingCheckTopbar from "../../component/ShoppingCheckTopbar";

export default function ProductDetailPage() {
  const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate({from: "/product/$productId"});

  const {productId} = useParams({from: "/product/$productId"});

  const fetchProductByPid = async () => {
    const responseData = await getProductByPid(productId);
    setProductDto(responseData);
    setIsLoading(false);
  }

  const handleQuantityMinusOne = () => {
    if (quantity > 1) {
      setQuantity((prevState) => (prevState - 1));
    }
  }

  const handleQuantityPlusOne = () => {
    if (productDto && quantity < productDto.stock) {
      setQuantity((prevState) => (prevState + 1));
    }
  }

  useEffect(() => {
    fetchProductByPid();
  }, []);

  const handlePutCartItem = async () => {
    if (!loginUser) {
      navigate({to: "/login"});
      return;
    }

    if (!productDto) {
      return;
    }

    try {
      setIsAddingToCart(true);
      await putCartItem(productDto.pid, quantity);
      setIsAddingToCart(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000)
    } catch {
      navigate({to: "/error"});
    }
  }

  return (
    <div className="product-detail-container text-primary">
      <Announcebar/>
      <ShoppingCheckTopbar/>
      <div className="flex flex-col lg:flex-row flex-1">
        {
          productDto && !isLoading
            ? <ProductDetailContent
              productDto={productDto}
              quantity={quantity}
              handleQuantityMinusOne={handleQuantityMinusOne}
              handleQuantityPlusOne={handleQuantityPlusOne}
              handlePutCartItem={handlePutCartItem}
              isAddingToCart={isAddingToCart}
              isSuccess={isSuccess}
            />
            : <LoadingContainer/>
        }
      </div>
      <FooterBar/>
    </div>
  )
}