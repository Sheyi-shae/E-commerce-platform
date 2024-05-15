'use client'
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Menu, Search, ShoppingBag, ShoppingBasket, User, UserCheck } from 'lucide-react'
import { useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import { Button } from "flowbite-react";
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal'


export default function Headersection() {
  const [showSearch, setShowSearch]= useState(false);
  const searchToggle=()=>{
    setShowSearch(!showSearch)

  }
  const [sideCart,setSideCart]=useState(false)
  const cartItems= useSelector((store)=>store.cart) //selector in redux for holding items stored in it && cart is it name in the reducer

  
  return (
    <>
    
    <div className='hidden rounded-sm shadow-sm shadow-slate-500 z-10  fixed w-full
     bg-white dark:bg-slate-700 px-16  md:flex md:flex-row h-[12vh] md:h-[12.5vh]  items-center  '>
     <div className={` cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
    <CartSidebar state={sideCart} setState={setSideCart}/></div>
    {/* large screen */}
    <div>
        <h3 className='capitalize font-mono font-medium text-3xl p-8'>logo here</h3>
    </div>

    <div className='mx-auto'>
        <SearchInput/>
    </div>
    <div className='mr-3 ml-3 flex md:shrink-0'> <Button.Group outline>
        <Button gradientDuoTone="tealToLime">
          <User className="mr-1 h-4 w-4" />
         <RegisterModal/>
        </Button>
        <Button gradientDuoTone="tealToLime">
          <UserCheck className="mr-1 h-4 w-4" />
          <LoginModal/>
        </Button>
      </Button.Group></div>
    {/* <div className='mr-3'> <AccountDropdown/></div> */}

    <div>
    
<button onClick={()=>setSideCart(true)} type="button" className="relative inline-flex items-center p-3 text-center ">
<ShoppingBag size={30} className='text-black  dark:text-white '/>
<span className="sr-only">Shopping Basket</span>
  <div className="absolute inline-flex items-center shadow-sm justify-center w-5 h-5 text-xs  text-white
   bg-slate-900 rounded-full -top-0 end-8 ">{cartItems.length}</div>
</button>

    {/*  */}
    </div>



    </div>
    {/* mobile screen */}

    <div className='md:hidden fixed z-10 px-2 lg:hidden flex shadow-md shadow-slate-400 dark:shadow-inner  min-w-full justify-between flex-row bg-white
     dark:bg-slate-700  h-[10vh] gap-2  items-center'>
     <div className={` cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
    <CartSidebar state={sideCart} setState={setSideCart}/></div>
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
    
    

    <div><button type="button" onClick={()=>setSideCart(true)} className="relative inline-flex   text-sm font-medium text-center text-white
     bg-inherit rounded-lg focus:ring-4 focus:outline-none dark:bg-inherit">
<ShoppingBasket size={28} className='text-black dark:text-yellow-600 '/>
<span className="sr-only">Shopping Basket</span>
  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs 
   text-white bg-red-500 border-2 border-white rounded-full -top-2 end-4 dark:border-gray-900">{cartItems.length}</div>
</button></div>
<div><button >
    <ThemeSwitcher size={22} className={'text-slate-500 dark:text-yellow-500  '}/></button>
    </div></div>
</div>




{showSearch && <div className=' mt-14 w-[100%] fixed'><SearchInput/></div> }


    </>
  )
}
