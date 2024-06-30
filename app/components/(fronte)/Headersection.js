'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { HiShoppingBag} from "react-icons/hi";

import { ThemeSwitcher } from '../ThemeSwitcher';
import { LayoutDashboard, Menu, PieChart, Search, ShoppingBag, ShoppingBasket, User, X } from 'lucide-react';
import CartSidebar from './CartSidebar';
import AccountDropdown from './AccountDropdown';
import AcccountModal from './AcccountModal';
import SearchModal from './SearchInput';
import MobileSearch from './MobileSearch';
import { MobileMenu } from './products/MobileMenu';
import toast from 'react-hot-toast';
import Image from 'next/image';
// import dynamic from "next/dynamic";


export default  function Headersection({ sessions }) {
  const [clientRendered, setClientRendered] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const [sidebar,setSideBar]=useState(false)
  const cartItems = useSelector((store) => store.cart);
  const toggleSidebar = () => { 
   
    setSideBar(!sidebar);
    setSideCart(false)
   
  };
  const toggleCart =()=>{
    setSideCart(!sideCart)
    setSideBar(false)
  }
  useEffect(() => {
    setClientRendered(true);
  }, []);

  if (!clientRendered) {
    return null; // Render nothing on the first render
  }


  return (
    <>
      <div className='hidden rounded-sm shadow-sm shadow-slate-500 z-10 fixed w-full specialbg dark:bg-slate-700 px-24 md:flex md:flex-row h-[12vh] md:h-[12.5vh] items-center'>
        <div className={`cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
          <CartSidebar state={sideCart} setState={setSideCart} />
        </div>
        {/* large screen */}
        <div className='h-full relative p-8 w-24'>
        <Link href={'/'}><Image src='/logo.png' alt='logo' fill className='object-cover'/></Link>          
        </div>
        <div className='mx-auto'>
          <SearchModal />
        </div>
        <div className='mr-3 ml-3 gap-2 flex md:shrink-0'>
          {sessions?.user ? (
            <AccountDropdown sessions={sessions} />
          ) : (
            <AcccountModal gradientDuoTone={'pinkToOrange'} size={20} title={'Account'} />
          )}
          {sessions?.user.isAdmin && (
            <Link href='/dashboard'>
            <PieChart size={28} className=' dark:text-pink-600'/>
            </Link>
          )}
        </div>
        <div>
          <button
            onClick={() => setSideCart(true)}
            type='button'
            className='relative inline-flex items-center p-3 text-center'>
            <HiShoppingBag fontSize={30}  className='text-slate-800 dark:text-pink-600 ' />
            <span className='sr-only'>Shopping Basket</span>
            <span className='absolute inline-flex items-center shadow-sm justify-center w-5 h-5 text-xs text-white bg-slate-900 rounded-full -top-0 end-8'>
              {cartItems?.length}
            </span>
          </button>
        </div>
      </div>
      {/* mobile screen */}
      <div className='md:hidden fixed z-10 px-2 lg:hidden flex shadow-md shadow-slate-400 dark:shadow-inner
       min-w-full justify-between flex-row specialbg dark:bg-slate-700 h-[10vh] gap-2 items-center'>
        <div className={`cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
          <CartSidebar state={sideCart} setState={setSideCart} toggleCart={toggleCart} />
        </div>
            
        <div className='flex gap-3 justify-start'>
          <div>
            <button  onClick={toggleSidebar}>
            {sidebar ?
              <X size={28}  className='text-black dark:text-pink-600 ' /> :
              <Menu size={28}  className='text-black dark:text-pink-600 ' />
             }
              
              
            </button>
            <div className="block md:hidden ">
     <MobileMenu isOpen={sidebar} sessions={sessions} toggleSidebar={toggleSidebar} cartItems={cartItems} />
        </div>
           
          </div>
          <div>
            <MobileSearch/>
          </div>
        </div>
        
        <div className='h-full relative p-8 w-20'>
        <Link href={'/'}><Image src='/logo.png' alt='logo' fill className='object-cover'/> </Link>         
        </div>
        <div className='flex gap-3 '>
          <div>
            
          {sessions?.user ? (
            <AccountDropdown  sessions={sessions} />
          ) : (
            <AcccountModal title={''}  />
          )}
          
            
          </div>
          <div>
            <button
              type='button'
              onClick={toggleCart}
              className='relative inline-flex text-sm font-medium text-center text-white bg-inherit rounded-lg   dark:bg-inherit'>
              <ShoppingBasket size={28} className='text-slate-800 dark:text-pink-600' />
              <span className='sr-only'>Shopping Basket</span>
              {cartItems?.length > 0 && (
                <p className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500  border-2 border-white rounded-full -top-2 end-4 dark:border-gray-900'>
                  {cartItems?.length}
                </p>
              )}
            </button>
          </div>
          
        </div>
      </div>
     
    </>
  );
}
// export default dynamic (() => Promise.resolve(Headersection), {ssr: false})
