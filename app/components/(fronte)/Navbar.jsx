'use client'
import { Boxes, Contact, Flame, Home, Layers3, Menu, MenuSquare, NotebookTabs, Store } from "lucide-react";
import { useState } from "react";
import CategoriesMenu from "./Categories";

import Link from "next/link";


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
    <br/><br/><br/>
      <div className="lg:h-[8vh] hidden md:flex  mt-4 md:h-[6vh] px-20  bg-black md:rounded-sm">
      
        <div className=" lg:h-[10vh] md:h-[5vh] z-[2] ">


          <button
            onClick={handleToggleCategories} // Use a separate function for clarity
            className=" 
               ml-6 flex md:px-6 md:py-0 lg:px-8 lg:py-3
            lg:text-2xl whitespace-nowrap  dark:text-black jersey-25-regular text-gray-900 bg-gradient-to-r from-yellow-600 via-yello-400 to-orange-400 hover:bg-gradient-to-bl font-medium text-center "
          >
            <Layers3  size={30} className=""/> Categories
          </button>
          
          <div className={`z-40 ${categoriesBarClasses}`}>
            <CategoriesMenu />
          </div>
         
        </div>
        <> 
         {/* nav links */}
        
        {NavLinks.map((link)=>(
          <Link href={''} key={link.id} className="capitalize lg:font-normal
           text-slate-100 px-4 py-2 items-center flex  whitespace-nowrap md:text-sm 
            hover:text-yellow-600   transition-colors duration-500">
           {link.icon} {link.title}
           
           </Link>
        ))}
       
          </>
      </div>
      
    </div>
  );
}
