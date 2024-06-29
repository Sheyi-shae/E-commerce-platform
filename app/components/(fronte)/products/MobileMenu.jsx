
"use client";

import { Badge, Button, Sidebar } from "flowbite-react";
import Link from "next/link";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser, } from "react-icons/hi";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { BookType, Bus, Group, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import AcccountModal from "../AcccountModal";

export function MobileMenu({toggleSidebar,isOpen,sessions, cartItems}) {
  async function handleLogOut(){
    await signOut()
    router.push('/')
    toast.success('You Are Logged Out')
    toggleSidebar()
    
  }
  return (
    <div 
        className={`  fixed top-16 -left-0 z-50 w-[30%]  h-full   transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 ' : '-translate-x-[250%]  '
        } `}
      >
       
    <Sidebar aria-label="Default sidebar example" >
      <Sidebar.Items className="text-sm">
        <Sidebar.ItemGroup onClick={()=>toggleSidebar()}>
        {sessions?.user.isAdmin && ( 
          <><Link href={'/dashboard'}>
          <Sidebar.Item icon={HiChartPie} className="text-sm">
            Dashboard
          </Sidebar.Item>
          </Link>
          </>)}
          
          <Link href={'/cart'}>
          <Sidebar.Item icon={HiShoppingBag} label={cartItems.length} className="text-sm">
            My Cart
          </Sidebar.Item>
          </Link>
          
         
          <Link href={'/orders'}><Sidebar.Item  icon={Bus} className="text-sm">
            Orders
          </Sidebar.Item></Link>
          <Link href={'/collections'}><Sidebar.Item  icon={Group} className="text-sm">
            Collections
          </Sidebar.Item></Link>
          <Link href={'/about'}><Sidebar.Item  icon={BookType} className="text-sm">
            About Us
          </Sidebar.Item></Link>
          
         
          <Sidebar.Item  className="text-sm">
            
              <ThemeSwitcher size={22}  />
           
              </Sidebar.Item>
              {sessions?.user ? (
                <button onClick={handleLogOut} className="text-white  bg-gradient-to-br from-pink-600 to-red-600
    hover:bg-gradient-to-bl flex items-center justify-center rounded-md shadow-md dark:focus:ring-pink-800 
     text-sm  p-2 px-2  text-center me-2 mb-2"><Sidebar.Item  className="text-sm flex">
     Logout</Sidebar.Item></button>

              ) :(
                <>
                <Link href={'/login'}><Sidebar.Item  className="text-sm flex justify-center">
                <Button  outline className='' gradientDuoTone={'pinkToOrange'}>
          <User size={20} className="mr-1" />
      {'Sign in'}</Button>
                </Sidebar.Item></Link>
                <Link href={'/register'}><Sidebar.Item  className="text-sm flex justify-center">
                <Button   className='' gradientDuoTone={'pinkToOrange'}>
          <User size={20} className="mr-1" />
      {'Sign up'}</Button>
                </Sidebar.Item></Link>
                </>
                
              )}


              
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          Preview the new  dashboard navigation! You can turn the new navigation off for a limited time in your
          profile.
        </div>
        
      </Sidebar.CTA>
    </Sidebar>
    </div>
   
  );
}
