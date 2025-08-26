import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";
import Testimonial from "./component/Testimonial.tsx";
import FooterBar from "../../component/FooterBar";
import AllProductCardContainer from "./component/AllProductCardContainer.tsx";
import Menu from "../../component/Menu";
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import LoadingContainer from "../../component/LoadingContainer";
import {getAllProduct, getProductsByCategory} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";

export default function ProductListingPage() {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const navigate=useNavigate({from:"/"});

  const fetchAllProduct = async ()=>{
    try{
      const responseData=await getAllProduct();
      setGetAllProductDtoList(responseData);
      setIsLoading(false);
    } catch {
      navigate({to:"/error"});
    }
  }

  const fetchProductsByCategory = async (category:string)=>{
    try{
      setIsLoading(true);
      const responseData = await getProductsByCategory(category);
      setGetAllProductDtoList(responseData);
      setIsLoading(false);
    }catch{
      navigate({to:"/error"});
    }
  }

  useEffect(() => {
    fetchAllProduct();
  }, []);

  // Handle category selection
  const handleCategoryChange = async (category: string)=>{
    // Don't reload if same category is selected
    if (category === selectedCategory) return;

    setSelectedCategory(category);

    try{
      setIsLoading(true);

      if (category==="ALL"){
        await fetchAllProduct();
      } else {
        await fetchProductsByCategory(category);
      }

      setIsLoading(false);

    }catch (error){
      console.error('Error fetching products:',error);
      navigate({to:"/error"});
    }

  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-primary">
      <Announcebar/>
      <TopNavbar/>
      <Testimonial/>
      {/* Main content area with responsive layout */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Menu - horizontal on mobile, vertical on desktop */}
        <div className="lg:w-64 lg:flex-shrink-0">
          {/*add className to fix width on desktop and prevent shrinking*/}
          <Menu
            onCategoryChange={handleCategoryChange}
          />
        </div>
        {/* Product container add className to take remaining space*/}
        <div className="flex-1">
          {
            (getAllProductDtoList && !isLoading)
              ? (<AllProductCardContainer
                getAllProductDtoList={getAllProductDtoList}
                categoryTitle={selectedCategory}
              />)
              : (<LoadingContainer/>)
          }
        </div>
      </div>
      <FooterBar/>
    </div>
  )
}