import { FormatCurrency } from '@/app/components/(fronte)/moneyinput'
import formatDate from '@/lib/dateFormat'
import Image from 'next/image'
import React from 'react'

export default function Receipt({order}) {
    const discount= order.totalPrice-order.amountPaid
    const percentDis= (discount/order.totalPrice)*100

    const amount= (percentDis/100)*order.totalPrice
    const amountPaid=order.totalPrice-amount
  return (
    <div className="max-w-3xl mx-auto p-3 bg-white rounded shadow-sm my-6" id="invoice">

  <div className="grid grid-cols-2 items-center">
  <div className='h-full relative p-8 w-16'>
        <Image src='/logo.png' alt='logo' fill className='object-cover'/>          
        </div>
    </div>
    <div className="text-right">
      
      <p className="text-gray-500 text-sm">
        sales@seyi-ecommerce.com
      </p>
      <p className="text-gray-500 text-sm mt-1">
        08148299505
      </p>
      
    </div>
    {/* <!-- Client info --> */}
  <div className="grid grid-cols-2 items-center mt-8">
    <div>
      <p className="font-bold text-gray-800">
        Bill to :
      </p>
      <p className="text-gray-500">
        {order.state}
        <br />
        {order.address}
      </p>
      <p className="text-gray-500">
        {order.email}
      </p>
    </div>

    <div className="text-right">
      <p className="">
        Invoice number:
        <span className="text-gray-500">{'INV-' + order.id}</span>
      </p>
      <p>
        Invoice date: <span className="text-gray-500">{formatDate (new Date(order.createdAt))}</span>
        
      </p>
    </div>
  </div>
  {/* <!-- Invoice Items --> */}
  <div className="-mx-4 mt-8 flow-root sm:mx-0">
    <table className="min-w-full">
      <colgroup>
        <col className="w-[90%] sm:w-1/2 md:w-[70%]"/>
        <col className="sm:w-1/6"/>
        <col className="sm:w-1/6"/>
        <col className="sm:w-1/6"/>
      </colgroup>
      <thead className="border-b border-gray-300 text-gray-900">
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3  w-[50%] text-left text-sm font-semibold text-gray-900 sm:pl-0">Items</th>
          <th scope="col" className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell">Quantity</th>
          <th scope="col" className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell">Price</th>
          <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">Amount</th>
        </tr>
      </thead>
      <tbody>
      {order.product?.map((product)=>(
        <tr key={product.id} className="border-b border-gray-200">
          <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
            <div className="font-medium text-gray-900">{product.title}</div>
          
          </td>
          <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{product.qty}</td>
          <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{FormatCurrency(product.Discountedprice)}</td>
          <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">{FormatCurrency(product.Discountedprice * product.qty)}</td>
        </tr>
    ))}
       
        
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="3" className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0">Subtotal</th>
          <th scope="row" className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Subtotal</th>
          <td className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">{order.totalPrice}</td>
        </tr>
       
        <tr>
          <th scope="row" colspan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0">Discount</th>
          <th scope="row" className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">Discount</th>
          <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">{percentDis + '%'}</td>
        </tr>
        <tr>
          <th scope="row" colspan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0">Total</th>
          <th scope="row" className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Total</th>
          <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">{amountPaid}</td>
        </tr>
      </tfoot>
    </table>
  </div>


  {/* <!--  Footer  --> */}
  <div className="border-t-2 pt-4 text-xs text-gray-500 text-center mt-16">
   Thanks for your Patronage.
  </div>


    </div>
    
  )
}
