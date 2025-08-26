import type {GetCartItemDto} from "../../data/cart/cartItem.type.ts";
import axios from "axios";
import {getAuthConfig} from "../../authService/FirebaseAuthService.ts";

const baseUrl="http://localhost:8080";

export async function getUserCart(){
  const response = await axios.get<GetCartItemDto[]>(
    `${baseUrl}/cart/items`, await getAuthConfig()
  )
  return response.data;
}

export async function putCartItem(pid: number, quantity: number){
  const response = await axios.put(
    `${baseUrl}/cart/items/${pid}/${quantity}`,
    undefined,
    await getAuthConfig()
  )
  return response.data;
}