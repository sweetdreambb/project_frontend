import type {TransactionDto} from "../../data/transaction/transaction.type.ts";
import axios from "axios";
import {getAuthConfig} from "../../authService/FirebaseAuthService.ts";

const baseUrl = "http://localhost:8080"

export async function getTransaction(tid: string) {
  const response = await axios.get<TransactionDto>(
    `${baseUrl}/transactions/${tid}`,
    await getAuthConfig()
  )
  return response.data;
}

export async function postTransaction(){
  const response = await axios.post<TransactionDto>(
    `${baseUrl}/transactions`,
    null,
    await getAuthConfig()
  )
  return response.data;
}

export async function processTransaction(tid:string){
  await axios.patch(
    `${baseUrl}/transactions/${tid}/payment`,
    null,
    await getAuthConfig()
  );
}

export async function finishTransaction(tid:string){
  await axios.patch(
    `${baseUrl}/transactions/${tid}/success`,
    null,
    await getAuthConfig()
  );
}