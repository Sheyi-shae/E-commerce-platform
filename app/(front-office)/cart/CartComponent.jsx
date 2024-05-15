
"use client";

import { FormatCurrency } from "@/app/components/(fronte)/moneyinput";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/cartslice";
import { Table } from "flowbite-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CartQuantity from "./CartQuantity";
import {  Trash2 } from "lucide-react";
import Link from "next/link";

export function CartComponent() {
    const cartItems= useSelector((store)=>store.cart) // cart is it name in the reducer
  const subTotal = cartItems.reduce((acc,currentItem)=>{
   return acc + (currentItem.Discountedprice * currentItem.qty) //acc is the accumulator for adding total items price
  },0)
  const dispatch=useDispatch()

function handleRemoveFromCart(cartId){
  dispatch(removeFromCart(cartId))
}
function handleQtyIncrement(cartId){
  dispatch(incrementQty(cartId))
}
function handleQtyDecrement(cartId){
  dispatch(decrementQty(cartId))
}
  return (
    <div className="overflow-x-auto flex justify-center flex-col gap-3  "> 
          {cartItems.length > 0 ? 

      cartItems.map((item, i) => (
      <Table striped key={i}>
        <Table.Head>
          <Table.HeadCell>Product </Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell className="">Quantity</Table.HeadCell>
          <Table.HeadCell className="">Total</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
 
        
          <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className=" md:max-w-72 font-normal roboto-light text-gray-700 dark:text-white">
            <div className=' relative flex gap-1 '>
            <Image
              src={item.imageUrl}
              alt=''
              width={500}
              height={300}
              className='object-cover h-20  w-20  rounded-sm'
            />
            <span className="text-xs md:text-sm ">{item.title}</span>
          </div>
            </Table.Cell>
           
            {/* format current does current(naira) formatting */}
             <Table.Cell>{item.qty} X {FormatCurrency(item.Discountedprice) }</Table.Cell>
             <Table.Cell className="">
             {/* reusable cart quantity */}
             <CartQuantity handleQtyDecrement={handleQtyDecrement} 
             itemId={item.id} qty={item.qty} handleQtyIncrement={handleQtyIncrement}/>
             </Table.Cell>
            <Table.Cell className="">{FormatCurrency(item.Discountedprice * item.qty)}</Table.Cell>
            <Table.Cell>
            <button
                onClick={() => handleRemoveFromCart(item.id)}
                className=' shadow-sm hover:text-red-600'
              >
                <Trash2 size={18}/>
              </button>
            </Table.Cell>
          </Table.Row>
     
         
         
        </Table.Body>
      </Table> )):(
        <>
        <div className="flex flex-col justify-center p-3 px-9">
        <div className="relative mx-auto ">
        <Image src={'/cart/empty_cart.png'} width={300} height={300} alt="empty_cart" className="w-32 h-32  object-contain" />
        </div>
       <div className="roboto-bold text-lg text-center text-slate-900">Your cart is empty</div>
        <div className="roboto-light text-center text-slate-600">Looks like you have not added 
        anything to your cart. Go ahead & explore our products</div>
        </div>

        </>
      )}

      
        
       { cartItems.length > 0 && 
       <>
       <div className="w-full p-1 py-4 text-slate-800 dark:text-slate-50 roboto-bold
       rounded-sm flex justify-end gap-7  bg-gray-200 shadow-lg dark:bg-slate-600">
    <sapn>Subtotal</sapn><span>{FormatCurrency(subTotal)}</span>
      </div>
      
      <div className="flex w-full p-3 gap-2">
      <div className="w-2/3 h-32 ring-1 ring-slate-300 rounded-md"></div>
      <div className="w-1/3 flex flex-col gap-2 px-2">
     <h6 className="lato-bold text-slate-700">Special Insruction</h6>
     <p className="text-xs text-slate-500">Taxes and shipping calculated at checkout</p>
     <div className=" flex mt-2 justify-end">
     <Link href={'/checkout'}><button type="button" className="text-white flex bg-gradient-to-br from-pink-600 to-orange-500 
          hover:bg-gradient-to-bl text-xs focus:ring-2 gap-1 focus:outline-none focus:ring-orange-200 dark:focus:ring-pink-800 
        rounded-lg md:text-sm px-9 py-2.5 text-center me-2 mb-2">
        
         CHECKOUT </button></Link></div>
      </div>

      </div>
      </>
      }
    </div>
  );
}

  
