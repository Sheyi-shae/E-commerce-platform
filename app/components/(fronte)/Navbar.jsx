'use client'
import { AlignRight, Boxes, Contact, Flame, Home, Layers3, Menu, MenuSquare, NotebookTabs, Store } from "lucide-react";
import { useState } from "react";
import CategoriesMenu from "./Categories";

import Link from "next/link";
import { Button } from "flowbite-react";


export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const categoriesBarClasses = `
  categoriesbar 
    ${showCategories ? ' open' : ' h-0 overflow-hidden'} /* Set initial height */
  `;

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
     
  };
  const NavLinks=[
    {id:1,title:'home',url:'', icon:<Home className=""/>},{id:2,title:'collection',url:'',icon:<Boxes/>},{id:3,title:'shop',url:'',icon:<Store/>},
    {id:4,title:'new deals',url:'',icon:<Flame color="red"/>},{id:5,title:'about us',url:'',icon:<NotebookTabs/>},
    {id:6,title:'contact',url:'',icon:<Contact/>}]

    

  return (
    <div className=" ">
   <div className="h-[9.5vh] md:h-[12.7vh] lg:h-[12.7vh] "></div>
      <div className="lg:h-[8vh] hidden md:flex lg:flex items-center     px-20  bg-black ">
      
        <div className=" hidden md:hidden lg:block h-10 z-[2] ">

        <Button onClick={handleToggleCategories} className="px-12 font-medium focus:ring-0 montserrat" gradientDuoTone="pinkToOrange">
        <AlignRight  size={20} className=" mr-2"/> Categories</Button>
          
         
          
          <div className={`z-40 ${categoriesBarClasses}`}>
            <CategoriesMenu />
          </div>
         
        </div>
        <> 
         {/* nav links */}
        
        {NavLinks.map((link)=>(
          <Link href={''} key={link.id} className="capitalize lg:font-normal
           text-slate-100 px-4 py-2 open-sans items-center flex  whitespace-nowrap md:text-sm 
            hover:text-yellow-600   transition-colors duration-500">
            {link.title}
           
           </Link>
        ))}
       
          </>
      </div>
      
    </div>
  );
}
