'use client'
import { Boxes, Contact, Flame, Home, Layers3, Menu, MenuSquare, NotebookTabs, Store } from "lucide-react";
import { useState } from "react";
import CategoriesMenu from "./Categories";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const categoriesBarClasses = `
  categoriesbar
    ${showCategories ? ' open' : '  h-0 overflow-hidden'} /* Set initial height */
  `;

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
     
  };
  const NavLinks=[
    {id:1,title:'home',url:'', icon:<Home className=""/>},{id:2,title:'collection',url:'',icon:<Boxes/>},{id:3,title:'shop',url:'',icon:<Store/>},
    {id:4,title:'new deals',url:'',icon:<Flame color="red"/>},{id:5,title:'about us',url:'',icon:<NotebookTabs/>},
    {id:6,title:'contact',url:'',icon:<Contact/>}]

    

  return (
    <div className="">
    <br/><br/><br/>
      <div className="lg:h-[8vh] hidden md:flex mt-5  md:h-[6vh]   bg-black md:rounded-sm">
      
        <div className=" lg:h-[9vh] md:h-[5vh]  ">
        
          <button
            onClick={handleToggleCategories} // Use a separate function for clarity
            className="bg-yellow-600 dark:bg-yellow-700  shadow-sm  shadow-yellow-600   rounded-sm ml-6 flex md:px-6 md:py-0 lg:px-8 lg:py-2
            lg:text-2xl whitespace-nowrap text-white dark:text-black font-normal"
          >
            <Layers3  size={30} className="-p-1"/> All Categories
          </button>
          
          <div className={categoriesBarClasses}>
            <CategoriesMenu />
          </div>
         
        </div>
        <> 
         {/* nav links */}
        
        {NavLinks.map((link)=>(
          <Link href={''} key={link.id} className="capitalize lg:font-normal
           text-slate-100 px-4 py-2 items-center flex  whitespace-nowrap md:text-sm  hover:text-yellow-600 transition-colors duration-500">
           {link.icon} {link.title}
           
           </Link>
        ))}
       
          </>
      </div>
      
    </div>
  );
}
