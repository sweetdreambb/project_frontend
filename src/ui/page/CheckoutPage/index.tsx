import CheckOutTable from "./component/CheckOutTable.tsx";
import {useNavigate, useParams} from "@tanstack/react-router";
import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import type {TransactionDto} from "../../../data/transaction/transaction.type.ts";
import LoadingContainer from "../../component/LoadingContainer";
import {finishTransaction, getTransaction, processTransaction} from "../../../api/transaction/transactionApi.ts";

export default function CheckoutPage() {

  const navigate=useNavigate({from:"/checkout/$transactionId"});
  const {transactionId}=useParams({from:"/checkout/$transactionId"});
  const loginUser=useContext(LoginUserContext);
  const [transactionDto, setTransactionDto] = useState<TransactionDto|undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingout, setIsCheckingout] = useState(false);

  const fetchTransaction = async() =>{
   const responseData = await getTransaction(transactionId);
   setTransactionDto(responseData);
   setIsLoading(false);
  }

  const handleCheckout = async ()=>{
    setIsCheckingout(true);
    await processTransaction(transactionId);
    await finishTransaction(transactionId );
    navigate({to:"/thankyou"});
  }

  useEffect(() => {
    if (loginUser){
      fetchTransaction();
    }
  }, [loginUser]);

  return (
    <div>
      <div className="flex justify-start px-10 py-8 bg-[#304d6e] w-full">
        <h1 className="font-thin text-white text-4xl italic">Express checkout</h1>
      </div>
      {
        !isLoading && transactionDto
        ?(
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
              <div className="flex flex-col lg:flex-row flex-1 justify-center my-15">
                <CheckOutTable
                  transactionDto={transactionDto}
                />
              </div>
              <div className="flex justify-center items-start mx-5 my-15 text-primary">
                <form
                  className="fieldset bg-base-200 border-base-300 rounded-box w-3xl border px-4 pb-4 text-xl"
                >
                  <legend className="fieldset-legend text-primary">
                    Delivery
                  </legend>

                  <label className="label">Country</label>
                  <input type="text" className="input w-full" placeholder="Country"/>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="label">First name</label>
                      <input type="text" className="input w-full" placeholder="First name"/>
                    </div>
                    <div>
                      <label className="label">Last name</label>
                      <input type="text" className="input w-full" placeholder="Last name"/>
                    </div>
                  </div>

                  <label className="label">Address</label>
                  <input type="text" className="input w-full" placeholder="Address"/>

                  <label className="label">Phone</label>
                  <input type="text" className="input w-full" placeholder="Phone"/>

                  <button
                    className="btn btn-success btn-circle mt-4 text-2xl w-full"
                    type="submit"
                    onClick={handleCheckout}
                    disabled={isCheckingout}
                  >
                    Pay now
                  </button>
                </form>
              </div>
            </div>
          ):(
            <LoadingContainer/>
          )
      }
    </div>
  )
}