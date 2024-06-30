'use client'
import { AlignRight, Boxes, Contact, Flame, Home, Layers3, Menu, MenuSquare, NotebookTabs, Store } from "lucide-react";
import { useState } from "react";
import CategoriesMenu from "./Categories";

import Link from "next/link";
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import { ThemeSwitcher } from "../ThemeSwitcher";


export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const {data:session, status}=useSession()

  const categoriesBarClasses = `
  categoriesbar 
    ${showCategories ? ' open ' : ' h-0 overflow-hidden'} 
  `;

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
     
  };
  const NavLinks=[
    {id:1,title:'home',url:'/'},{id:2,title:'collection',url:'/collections'},{id:3,title:'my cart',url:'/ca1rt'},
    {id:4,title:'new deals',url:'/'},{id:5,title:'about us',url:'/about',},
    ,{id:6,title:'orders',url:'/orders',icon:<Boxes/>}]

    

  return (
    <div className=" ">
   <div className="h-[9.5vh] md:h-[12.7vh] lg:h-[12.7vh] "></div>
      <div className="lg:h-[8vh] hidden md:flex lg:flex items-center  backdrop-blur-lg   px-20  bg-black ">
      
        <div className=" hidden md:hidden lg:block h-10 z-[2] ">

        <Button disabled onClick={handleToggleCategories} className="px-12 font-medium focus:ring-0 uppercase montserrat" gradientDuoTone="pinkToOrange">
        <AlignRight  size={20} className=" mr-2"/>all Categories</Button>
          
         
          
          <div className={`z-[100] ${categoriesBarClasses}`}>
            <CategoriesMenu />
          </div>
         
        </div>
        <> 
         {/* nav links */}
        
        {NavLinks.map((link)=>(
          <Link href={link.url} key={link.id} className="capitalize lg:font-normal
           text-slate-100 px-4 py-2 open-sans items-center flex  whitespace-nowrap md:text-sm 
            hover:text-pink-600   transition-colors duration-500">
            {link.title}
           
           </Link>
        ))}

       <ThemeSwitcher/>
          </>
      </div>
      
    </div>
  );
}
