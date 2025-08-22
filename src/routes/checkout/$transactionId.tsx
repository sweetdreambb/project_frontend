// import { createFileRoute } from '@tanstack/react-router'
//
// export const Route = createFileRoute('/checkout/$transactionId')({
//   component: RouteComponent,
// })
//
// function RouteComponent() {
//   return <div>Hello "/checkout/$transactionId"!</div>
// }
import {createFileRoute} from "@tanstack/react-router";
import CheckoutPage from "../../ui/page/CheckoutPage";

export const Route=createFileRoute('/checkout/$transactionId')({
  component:CheckoutPage,
})