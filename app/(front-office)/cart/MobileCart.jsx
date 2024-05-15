
"use client";

import { FormatCurrency } from "@/app/components/(fronte)/moneyinput";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/cartslice";
import { Table } from "flowbite-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CartQuantity from "./CartQuantity";
import { Pencil, Trash2, X, XCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function MobileCartComponent() {
    const [showQty,setShowQty]=useState(false)
    const cartItems= useSelector((store)=>store.cart) // cart is it name in the reducer
  const subTotal = cartItems.reduce((acc,currentItem)=>{
   return acc + (currentItem.Discountedprice * currentItem.qty) //acc is the accumulator
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
    <div className="overflow-x-auto flex flex-col gap-3 ">
    {cartItems.length > 0 ? 

cartItems.map((item, i) => (
      <Table striped key={i}>
        <Table.Head>
          <Table.HeadCell>Product </Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          
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
             <Table.Cell className="flex flex-col">
             <div>
              {item.qty} X {FormatCurrency(item.Discountedprice) }  
             </div>
             <div>
                <button onClick={()=>setShowQty(!showQty)}>{showQty ? <XCircle className="text-red-500" size={18}/> : <Pencil size={18}/> }</button>

             </div>
           {showQty &&  <div>
                {/* reusable cart quantity */}
              
            <CartQuantity handleQtyDecrement={handleQtyDecrement} 
             itemId={item.id} qty={item.qty} handleQtyIncrement={handleQtyIncrement}/>
             </div> }
             </Table.Cell>
            
             
             
            {/* <Table.Cell className=""></Table.Cell> */}
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
      </Table>
    )):(
        <>
        <div className="flex flex-col justify-center p-2 px-5">
        <div className="relative mx-auto ">
        <Image src={'/cart/empty_cart.png'} width={300} height={300} alt="empty_cart" className="w-24 h-23  object-contain" />
        </div>
       <div className="roboto-bold text-sm text-center text-slate-900">Your cart is empty</div>
        <div className="roboto-light text-xs text-center text-slate-600">Looks like you have not added 
        anything to your cart. Go ahead & explore our products</div>
        </div>
        </>
      )}
      {cartItems.length > 0 && 
      <>
      <div className="w-full p-1 py-4 text-slate-800 dark:text-slate-50 roboto-bold
       rounded-sm flex justify-center gap-5  bg-gray-200 shadow-lg dark:bg-slate-600">
    <sapn>Subtotal</sapn><span>{FormatCurrency(subTotal)}</span>
      </div>
      
      <div className="flex w-full flex-col p-3 gap-2">
      <div className= "h-32 ring-1 ring-slate-300 rounded-md"></div>
      <div className=" flex flex-col gap-2 px-2">
     <h6 className="lato-bold text-slate-700">Special Insruction</h6>
     <p className="text-xs text-slate-500">Taxes and shipping calculated at checkout</p>
     <div className=" flex mt-2 justify-center">
     <Link href={'/checkout'}><button type="button" className="text-white flex bg-gradient-to-br from-pink-600 to-orange-500 
          hover:bg-gradient-to-bl text-xs focus:ring-2 gap-1 focus:outline-none focus:ring-orange-200 dark:focus:ring-pink-800 
        rounded-lg md:text-sm px-9 py-2.5 text-center me-2 mb-2">
        
         CHECKOUT </button></Link></div>
      </div>
      </div>
    
      
      </>}
    </div>
  );
}

  
