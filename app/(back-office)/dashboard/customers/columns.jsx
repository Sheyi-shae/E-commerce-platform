"use client"
import Image from 'next/image';
import { MoreHorizontal,ArrowUpDown, Edit, Delete, Trash, Trash2, SortAsc, Pen, Copy, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SortDesc } from 'lucide';
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
   accessorKey: "firstName",
    header: () => <div className="">First Name</div>,
    cell: ({ row }) => {
        const lastName = (row.getValue("firstName"))
        
 
      return <div className=" capitalize font-medium line-clamp-1">{lastName}</div>
    },
  },
  {
    accessorKey: "lastName",
    header: () => <div className="">Last Name</div>,
    cell: ({ row }) => {
        const lastName = (row.getValue("lastName"))
        
 
      return <div className=" font-medium line-clamp-1 capitalize">{lastName}</div>
    },
  },
  {
    accessorKey: "email",
    header:() => <div className="">Customer Email</div>,
    cell: ({ row }) => {
      const email = (row.getValue("email"))
      
 
      return <div className=" font-medium line-clamp-1">{email}</div>
    },
  },
  {
    accessorKey: "phone",
    header:() => <div className="">Phone Number</div>,
    cell: ({ row }) => {
      const phone = (row.getValue("phone"))
      
 
      return <div className="  line-clamp-1">{phone}</div>
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="">Registration Date</div>,
    cell: ({ row }) => {
      const date =(row.getValue("createdAt"))
    
 
      return <div className=" font-medium">{formatDate(new Date(date))}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customerId = row.original
 
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
              onClick={() => navigator.clipboard.writeText(customerId.email)}
            >
             <Copy size={22}/> Copy 
            </DropdownMenuItem>
            <DropdownMenuSeparator />
           <Link href={`/dashboard/customers/update/${customerId.id}`}> 
           <DropdownMenuItem className='text-green-500 space-x-2 hover:cursor-pointer '>
           <DropdownMenuSeparator />
            <Eye size={22} />More Details</DropdownMenuItem></Link>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem><DeleteModal name={'Product'} endpoint={`products`} id={productId.id}/>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
