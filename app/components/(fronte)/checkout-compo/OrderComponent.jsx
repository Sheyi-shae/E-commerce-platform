
"use client";

import { FormatCurrency } from "@/app/components/(fronte)/moneyinput";

import { Table } from "flowbite-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CartCoupon from "../CartCoupon";

export function OrderComponent() {
    const cartItems= useSelector((store)=>store.cart) // cart is it name in the reducer
  const subTotal = cartItems?.reduce((acc,currentItem)=>{
   return acc + (currentItem.Discountedprice * currentItem.qty) //acc is the accumulator for adding total items price
  },0)
 
  return (
    <div className="overflow-x-auto flex justify-center flex-col gap-3  "> 
          <div className="m-2 mx-auto"><CartCoupon subTotal={subTotal}/></div>
      <Table striped >
        <Table.Head>
          <Table.HeadCell>Product </Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
         
          <Table.HeadCell className="">Total</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
 
        {cartItems?.length > 0 &&

cartItems?.map((item, i) => (
          <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className=" md:max-w-72 font-normal roboto-light text-gray-700 dark:text-white">
            <div className=' relative flex gap-1 '>
            <Image
              src={item.imageUrl}
              alt=''
              width={500}
              height={300}
              className='object-cover h-12 md:h-20 w-12 md:w-20  rounded-sm'
            />
            <span className="text-xs md:text-sm ">{item.title}</span>
          </div>
            </Table.Cell>
           
            {/* format current does current(naira) formatting */}
             <Table.Cell className="text-xs md:text-sm ">{item.qty} X {FormatCurrency(item.Discountedprice) }</Table.Cell>
             <Table.Cell className="text-xs md:text-sm ">
             {FormatCurrency(item.Discountedprice * item.qty)}
             </Table.Cell>
           
            
          </Table.Row>
        ))}
         
         
        </Table.Body>
      </Table>

      
        
       
    </div>
  );
}

  
