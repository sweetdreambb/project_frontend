import "cally";
import DeliveryPreference from "./component/DeliveryPreference.tsx";
import CartItemTable from "./component/CartItemTable.tsx";
import FooterBar from "../../component/FooterBar";
import type {GetCartItemDto} from "../../../data/cart/cartItem.type.ts";
import {useContext, useEffect, useState} from "react";
import LoadingContainer from "../../component/LoadingContainer";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {useNavigate} from "@tanstack/react-router";
import {getUserCart} from "../../../api/cartItem/cartItemApi.ts";

export default function ShoppingCartPage() {

  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate({from: "/shoppingcart"});

  const [getCartItemDtoList, setGetCartItemDtoList] = useState<GetCartItemDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [hasValidDelivery, setHasValidDelivery] = useState(false);

  const fetchUserCart = async () => {
    try {
      const responseData = await getUserCart();
      setGetCartItemDtoList(responseData);
      setIsLoading(false);
    } catch {
      navigate({to: "/error"})
    }
  }

  const handleQuantityChange = (pid: number, quantity: number) => {
    setGetCartItemDtoList(
      getCartItemDtoList?.map((dto) => {
          if (dto.pid === pid) {
            dto.cartQuantity = quantity
          }
          return dto;
        }
      )
    )
  }

  const handleDelete = (pid:number)=>{
    setGetCartItemDtoList(
      getCartItemDtoList?.filter((dto)=>(
        dto.pid!=pid
      ))
    )
  }

  useEffect(() => {
    if (loginUser === null) {
      navigate({to: "/login"});
    } else {
      fetchUserCart();
    }
  }, [loginUser]);



  const calculateTotalSales =
    (cartItemList: GetCartItemDto[]) => {
      return cartItemList.reduce((total, item) =>
        total + (item.price * Math.min(item.cartQuantity, item.stock)), 0);
    }

  const estTotal = getCartItemDtoList && calculateTotalSales(getCartItemDtoList);
  const balance = estTotal && (500 - estTotal);

  const handleDeliveryChange = (hasValidDelivery: boolean) => {
    setHasValidDelivery(hasValidDelivery);
  }

  const renderShoppingCart = () => {
    if (isLoading || !getCartItemDtoList) {
      return <LoadingContainer/>;
    }

    if (getCartItemDtoList.length === 0) {
      return <h1>Your cart is empty</h1>;
    }

    return (
      <>
        <CartItemTable
          handleQuantityChange={handleQuantityChange}
          getCartItemDtoList={getCartItemDtoList}
          estTotal={calculateTotalSales(getCartItemDtoList)}
          handleDelete={handleDelete}
        />
        {
          hasValidDelivery
            ? (
              <button
                className="btn btn-success mt-4 text-2xl w-full my-4 text-black"
                type="submit"
              >
                Checkout
              </button>
            ) : (
              <button
                className="btn btn-disabled mt-4 text-2xl w-full my-4 text-black"
              >
                Choose a date and time
              </button>
            )
        }
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-start px-10 py-8 bg-[#304d6e]">
        <h1 className="font-extrabold text-white text-xl">MY CART</h1>
        <div
          className="rounded-full bg-base-100 text-primary px-2 mx-2 font-bold"> {getCartItemDtoList && getCartItemDtoList.length}</div>
      </div>
      <div className="flex justify-between px-10 pt-2">
        {
          getCartItemDtoList && !isLoading && estTotal && estTotal >= 500
            ? <p>Congrats! You have unlocked Free Shipping!</p>
            : getCartItemDtoList && !isLoading && estTotal && estTotal < 500
              ? <p>Add ${balance && balance.toLocaleString()} to unlock Free Shipping</p>
              : <span className="loading loading-dots loading-xs"></span>
        }
        {
          estTotal && estTotal < 500 && <p className="font-bold">$500</p>
        }
      </div>
      <div className="px-10 flex justify-center my-4">
        {
          estTotal &&
            <progress className="progress progress-success w-full" value={Math.min(500, estTotal)} max="500"></progress>
        }
      </div>

      {/* Main content area with responsive layout */}
      <div className="flex flex-col lg:flex-row flex-1 mx-10">
        {/* horizontal on mobile, vertical on desktop */}
        <div className="lg:w-90 lg:flex-shrink-0">
          {/*add className to fix width on desktop and prevent shrinking*/}
          <DeliveryPreference onDeliveryChange={handleDeliveryChange}/>
        </div>

        <div className="flex-1">
          {renderShoppingCart()}
        </div>

      </div>
      <FooterBar/>
    </div>
  )
}