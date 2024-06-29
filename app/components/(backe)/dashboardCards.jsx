'use client'
import { getData } from '@/lib/getData'
import { AreaChart, BadgeDollarSign, BarChart,   LineChart, PieChart,    } from 'lucide-react'
import React, { useState } from 'react'
import { FormatCurrency } from '../(fronte)/moneyinput'
import FetchData from '@/lib/fetchData(client)'


export default function DashboardCards() {
  const[ lastMonth,setLastMonth]=useState([])
  const [thisMonth,setThisMonth]=useState([])
  const [today,setToday ]=useState([])
  const[ yesterday,setYesterday]=useState([])
  const[ allTime,setAllTime]=useState([])

 
  
  return (
    <div>
    <div className='flex gap-3'>
    <FetchData endpoint={'lastmonthsales'} state={lastMonth} setState={setLastMonth}/>
    <FetchData endpoint={'thismonthsales'} state={thisMonth} setState={setThisMonth}/>
    <FetchData endpoint={'todaysales'} state={today} setState={setToday}/>
    <FetchData endpoint={'yesterdaysales'} state={yesterday} setState={setYesterday}/>
    <FetchData endpoint={'alltimesales'} state={allTime} setState={setAllTime}/></div>
        <div className='grid  grid-cols-2 md:grid-cols-4 montserrat text-xs md:text-sm lg:grid-cols-5 p-3 gap-2  text-center'>
        <div className='bg-blue-600 shadow-md  p-2'>
        {/* cards */}
      <span className='text-white capitalize  ' >
      <center><AreaChart size={32}/></center>
        Today Sales
        <p>{FormatCurrency(today.totalSales)}</p>
      </span>
      
</div>
<div className='bg-green-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><LineChart size={32}/></center>
        yesterday orders
        <p>{FormatCurrency(yesterday.totalSales)}</p>
      </span>
      
</div>
<div className='bg-orange-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><BadgeDollarSign size={32}/></center>
        current month 
        <p>{FormatCurrency(thisMonth.totalSales)}</p>
      </span>
      
</div>
<div className='bg-violet-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><PieChart size={32}/></center>
        previous month
        <p>{FormatCurrency(lastMonth.totalSales)}</p>
      </span>
      
</div>

<div className='bg-violet-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><BarChart size={32}/></center>
        all-time sales
        <p>{FormatCurrency(allTime.totalSales)}</p>
      </span>
      
</div>
        </div>
    </div>
  )
}
