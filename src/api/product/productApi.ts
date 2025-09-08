import axios from "axios";
import type {GetAllProductDto, ProductDto} from "../../data/product/product.type.ts";
import getEnvConfig from "../../config/env/EnvConfig.ts";

const baseUrl=getEnvConfig().baseUrl;

export async function getAllProduct(){
  const response =await axios.get<GetAllProductDto[]>(`${baseUrl}/public/products`);

  return response.data;

}

export async function getProductByPid(pid: string){
  const response = await axios.get<ProductDto>(`${baseUrl}/public/products/${pid}`);
  return response.data;
}

export async function getProductsByCategory(category:string) {
  const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/products/category/${category}`);
  return response.data;
}