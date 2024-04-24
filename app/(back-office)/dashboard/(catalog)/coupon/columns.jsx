"use client"

import { MoreHorizontal,ArrowUpDown, Pen, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteModal from '@/app/components/(backe)/DeleteModal';
import Link from 'next/link';


const formatDate = (originalDate) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dd = originalDate.getDate();
    const monthIndex = originalDate.getMonth();
    const yyyy = originalDate.getFullYear();
    const suffix = (dd === 1 || dd === 21 || dd === 31) ? 'st' : (dd === 2 || dd === 22) ? 'nd' : (dd === 3 || dd === 23) ? 'rd' : 'th';
    return `${dd}${suffix} ${months[monthIndex]} ${yyyy}`;
  };
  
   


//enter your tables data from db and how it will be displayed to client
//accessKey is the data from db
export const columns = [
  
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
    },
 
  {
    accessorKey: "title",
    header: ({ column }) => {
        
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      }
      
  },
 
  {
    accessorKey: "couponSlug",
    header:() => <div className="">Coupon Code</div>,
    cell: ({ row }) => {
      const couponSlug = (row.getValue("couponSlug"))
      
 
      return <div className=" font-medium line-clamp-1">{couponSlug}</div>
    },
  },
  {
    accessorKey: "expiryDate",
    header: () => <div className="">Expiry Date</div>,
    cell: ({ row }) => {
      const date =(row.getValue("expiryDate"))
    
 
      return <div className=" font-medium">{formatDate(new Date(date))}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const categoryId = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
          
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(categoryId.couponSlug)}
            >
             <Copy size={22}/> Copy 
            </DropdownMenuItem>
            <DropdownMenuSeparator />
           <Link href={`/dashboard/coupon/update/${categoryId.id}`}> 
           <DropdownMenuItem className='text-green-500 space-x-2 hover:cursor-pointer '>
           <DropdownMenuSeparator />
            <Pen size={22} /> Edit</DropdownMenuItem></Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem><DeleteModal  endpoint={`coupon`} id={categoryId.id}/></DropdownMenuItem>
       
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

