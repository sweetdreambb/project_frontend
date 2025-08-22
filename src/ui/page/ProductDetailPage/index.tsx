import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";
import FooterBar from "../../component/FooterBar";
import Menu from "../../component/Menu";
import {useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";
import ProductDetailContent from "./ProductDetailContent.tsx";
import LoadingContainer from "../../component/LoadingContainer";
import {useParams} from "@tanstack/react-router";
import {getProductByPid} from "../../../api/product/productApi.ts";

export default function ProductDetailPage() {
  const [productDto, setProductDto] = useState<ProductDto|undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const {productId}=useParams({from:"/product/$productId"});

  const fetchProductByPid = async ()=>{
    const responseData=await getProductByPid(productId);
    setProductDto(responseData);
    setIsLoading(false);
  }

  const handleQuantityMinusOne= ()=>{
    if (quantity>1){
      setQuantity((prevState)=>(prevState-1));
    }
  }

  const handleQuantityPlusOne= ()=>{
    if (productDto&& quantity<productDto.stock){
      setQuantity((prevState)=>(prevState+1));
    }
  }

  useEffect(() => {
    fetchProductByPid();
  }, []);

  return (
    <div className="product-detail-container text-primary">
      <Announcebar/>
      <TopNavbar/>
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Menu - horizontal on mobile, vertical on desktop */}
        <div className="lg:w-64 lg:flex-shrink-0">
          {/*add className to fix width on desktop and prevent shrinking*/}
          <Menu/>
        </div>
        {
          productDto && !isLoading
          ? <ProductDetailContent
              productDto={productDto}
              quantity={quantity}
              handleQuantityMinusOne={handleQuantityMinusOne}
              handleQuantityPlusOne={handleQuantityPlusOne}
            />
            : <LoadingContainer/>
        }

      </div>
      <FooterBar/>
    </div>
  )
}