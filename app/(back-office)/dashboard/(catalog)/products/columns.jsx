"use client"
import Image from 'next/image';
import { MoreHorizontal,ArrowUpDown, Edit, Delete, Trash, Trash2, SortAsc, Pen } from "lucide-react"

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
            <SortAsc className="ml-2 h-4 w-4" />
            
          </Button>
        )
      }
      
  },
  {
    accessorKey: "imageUrl",
    header: () => <div className="">Product Image</div>,
    cell: ({ row }) => {
        const imageURL = (row.getValue("imageUrl"))
        
 
      return <div className="">
      
        <Image src={imageURL} width={500} alt=''  height={500} className='w-16 h-16 rounded-full object-cover'/>
      </div>
    },
  },
  {
    accessorKey: "description",
    header:() => <div className="">Product Description</div>,
    cell: ({ row }) => {
      const description = (row.getValue("description"))
      
 
      return <div className=" font-medium line-clamp-1">{description}</div>
    },
  },
  {
    accessorKey: "price",
    header:() => <div className="">Product price</div>,
    cell: ({ row }) => {
      const price = (row.getValue("price"))
      
 
      return <div className=" font-medium line-clamp-1">{price}</div>
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="">Date Created</div>,
    cell: ({ row }) => {
      const date =(row.getValue("createdAt"))
    
 
      return <div className=" font-medium">{formatDate(new Date(date))}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const productId = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-green-500'>
            <Pen size={22}/> Edit</DropdownMenuItem>
            <DropdownMenuItem >
            <DeleteModal  endpoint={`products`} id={productId.id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
