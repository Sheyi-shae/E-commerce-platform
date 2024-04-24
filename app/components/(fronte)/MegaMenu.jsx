"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import FetchData from "@/lib/fetchData(client)"
import { useState } from "react"
import Image from "next/image"



export default function MegaMenu() {
    const [categories, setCategories] = useState([])
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <FetchData endpoint="categories" setState={setCategories} state={categories} />
      {categories.map((category) => ( <>
      {console.log(categories)}
        
        <NavigationMenuTrigger key={category.id}>
       
           {category.title}
        
        
        </NavigationMenuTrigger>
     
          
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Image src={category.imageURL} alt="" width={100} height={200}/>
                
                </NavigationMenuLink>
              </li>
              
              <ListItem href="/docs/primitives/typography" title={category.title}>
              {category.description}
              </ListItem>
            </ul>
          </NavigationMenuContent>
          </>
          ))}
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) =>  {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
