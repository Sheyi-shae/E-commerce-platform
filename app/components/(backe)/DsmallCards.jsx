'use client'
import FetchData from '@/lib/fetchData(client)'
import { BarChartBigIcon, BookMarked, Hourglass, Truck } from 'lucide-react'
import React, { useState } from 'react'

export default function DsmallCards() {
    const [orders,setOrders ]=useState([])
     const pendingOrders=orders.filter((item,i)=>item.status==='PROCESSING')
     const succesOrders=orders.filter((item,i)=>item.status==='SUCCESS')
  return (
    <div className='montserrat text-sm md:block'>
    <FetchData endpoint={'order'} state={orders} setState={setOrders}/>
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-10 gap-3  text-center'>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300  p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700 flex flex-row gap-2'>
            <div><BarChartBigIcon fill='green'  size={34}/></div>
               <div className='capitalize '>Total orders
                <p className='font-bold'>{orders.length}</p></div> 
            </span>
        </div>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300  p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700  flex flex-row gap-2'>
            <div><Hourglass fill='orange'  size={34}/></div>
               <div className='capitalize'>pending orders
                <p className='font-bold'>{pendingOrders.length}</p></div> 
            </span>
        </div>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300 p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700 flex flex-row gap-2'>
            <div><Truck fill='green'  size={34}/></div>
               <div className='capitalize'>successful orders
                <p className='font-bold'>{succesOrders.length}</p></div> 
            </span>
        </div>
        </div>
    </div>
  )
}
