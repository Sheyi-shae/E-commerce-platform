import { BarChartBigIcon, BookMarked, Hourglass, Truck } from 'lucide-react'
import React from 'react'

export default function DsmallCards() {
  return (
    <div className='hidden md:block'>
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-10 gap-3  text-center'>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300  p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700 flex flex-row gap-2'>
            <div><BarChartBigIcon fill='green'  size={34}/></div>
               <div className='capitalize '>Total orders
                <p className='font-bold'>732</p></div> 
            </span>
        </div>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300  p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700  flex flex-row gap-2'>
            <div><Hourglass fill='orange'  size={34}/></div>
               <div className='capitalize'>pending orders
                <p className='font-bold'>132</p></div> 
            </span>
        </div>
        <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300 p-2 rounded-lg'>
            <span className='dark:text-white text-slate-700 flex flex-row gap-2'>
            <div><Truck fill='green'  size={34}/></div>
               <div className='capitalize'>Orders delivered
                <p className='font-bold'>578</p></div> 
            </span>
        </div>
        </div>
    </div>
  )
}
