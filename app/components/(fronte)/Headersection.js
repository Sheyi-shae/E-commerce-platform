'use client'
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Menu, Search, ShoppingBag, ShoppingBasket, User } from 'lucide-react'

export default function Headersection() {
  const [showSearch, setShowSearch]= useState(false);
  const searchToggle=()=>{
    setShowSearch(!showSearch)

  }

  
  return (
    <>
    <div className='hidden rounded-sm shadow-sm shadow-slate-500 z-10 fixed w-full
     bg-white dark:bg-slate-700 px-16  md:flex md:flex-row h-[12vh] md:h-[12.5vh]  items-center  '>
    {/* large screen */}
    <div>
        <h3 className='capitalize font-mono font-medium text-3xl p-8'>logo here</h3>
    </div>

    <div className='mx-auto'>
        <SearchInput/>
    </div>

    <div className='mr-3'> <ThemeSwitcher size={28} className={'text-slate-500 dark:text-yellow-500  '}/></div>

    <div>
    
<button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-inherit rounded-lg focus:ring-4 focus:outline-none dark:bg-inherit">
<ShoppingBag size={40} className='text-black dark:text-yellow-600 '/>
<span className="sr-only">Shopping Basket</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0 end-9 dark:border-gray-900">20</div>
</button>

    {/*  */}
    </div>



    </div>
    {/* mobile screen */}

    <div className='md:hidden fixed z-10 px-12 lg:hidden flex shadow-md shadow-slate-400 dark:shadow-inner  min-w-full justify-between flex-row bg-white
     dark:bg-slate-700  h-[10vh] gap-2  items-center'>
     
     <div className='flex  gap-3'>
    <div>
    <button >
        <Menu size={28} className='text-black dark:text-yellow-600 '/></button>
    </div>
    <div>
    <button onClick={searchToggle}>
        <Search  size={28} className='text-black dark:text-yellow-600 z-[2] '/></button>
    </div></div>
    <div className='flex justify-center'>
    
    <button >
    <h3 className='capitalize  font-medium text-lg mx-auto px-6 '>logo here</h3></button>
    </div>
   
   <div className='flex gap-3 '>
    <div>
    <button >
        <User size={28} className='text-black dark:text-yellow-600 '/></button>
    </div>
    
    

    <div><button type="button" className="relative inline-flex   text-sm font-medium text-center text-white
     bg-inherit rounded-lg focus:ring-4 focus:outline-none dark:bg-inherit">
<ShoppingBasket size={28} className='text-black dark:text-yellow-600 '/>
<span className="sr-only">Shopping Basket</span>
  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs 
   text-white bg-red-500 border-2 border-white rounded-full -top-2 end-4 dark:border-gray-900">20</div>
</button></div>
<div><button >
    <ThemeSwitcher size={22} className={'text-slate-500 dark:text-yellow-500  '}/></button>
    </div></div>
</div>




{showSearch && <div className=' mt-14 w-[100%] fixed'><SearchInput/></div> }


    </>
  )
}
