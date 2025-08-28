import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";
import FooterBar from "../../component/FooterBar";
import Menu from "../../component/Menu";
import {useContext, useEffect, useState} from "react";
import type {GetAllProductDto, ProductDto} from "../../../data/product/product.type.ts";
import ProductDetailContent from "./component/ProductDetailContent.tsx";
import LoadingContainer from "../../component/LoadingContainer";
import {useNavigate, useParams} from "@tanstack/react-router";
import {getAllProduct, getProductByPid, getProductsByCategory} from "../../../api/product/productApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {putCartItem} from "../../../api/cartItem/cartItemApi.ts";

export default function ProductDetailPage() {
  const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);

  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate({from: "/product/$productId"});

  const {productId} = useParams({from: "/product/$productId"});

  const fetchProductByPid = async () => {
    const responseData = await getProductByPid(productId);
    setProductDto(responseData);
    setIsLoading(false);
  }

  const fetchAllProduct = async () => {
    try {
      const responseData = await getAllProduct();
      setGetAllProductDtoList(responseData);
      navigate({to:"/"})
      setIsLoading(false);
    } catch {
      navigate({to: "/error"});
    }
  }

  const fetchProductsByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      const responseData = await getProductsByCategory(category);
      setGetAllProductDtoList(responseData);
      setIsLoading(false);
    } catch {
      navigate({to: "/error"});
    }
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


  // Handle category selection
  const handleCategoryChange = async (category: string) => {
    // Don't reload if same category is selected
    if (category === selectedCategory) return;

    setSelectedCategory(category);

    try {
      setIsLoading(true);

      if (category === "ALL") {
        await fetchAllProduct();

      } else {
        await fetchProductsByCategory(category);
      }

      navigate({to:"/"});
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching products:', error);
      navigate({to: "/error"});
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
      <TopNavbar
        onCategoryChange={handleCategoryChange}
      />
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Menu - horizontal on mobile, vertical on desktop */}
        <div className="lg:w-64 lg:flex-shrink-0">
          {/*add className to fix width on desktop and prevent shrinking*/}
          <Menu
            onCategoryChange={handleCategoryChange}
          />
        </div>
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