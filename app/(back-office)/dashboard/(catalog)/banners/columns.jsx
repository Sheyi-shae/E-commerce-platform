"use client"
import Image from 'next/image';
import { MoreHorizontal,ArrowUpDown, Pen, Copy } from "lucide-react"

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
    accessorKey: "imageURL",
    header: () => <div className="">Thumbnail</div>,
    cell: ({ row }) => {
        const imageURL = (row.getValue("imageURL"))
        
 
      return <div className="">
      
        <Image src={imageURL} width={500} alt=''  height={500} className='w-12 h-12 rounded-full object-cover'/>
      </div>
    },
  },
  {
    accessorKey: "imageURL",
    header:() => <div className="">Image Link</div>,
    cell: ({ row }) => {
      const imageURL = (row.getValue("imageURL"))
      
 
      return <div className=" font-medium line-clamp-1">{imageURL}</div>
    },
  },
  {
    accessorKey: "isActive",
    header:() => <div className="">Status</div>,
    cell: ({ row }) => {
      const isActive = (row.getValue("isActive"))
      
 
      return <div className=" font-medium line-clamp-1">{isActive===true?'Active':'Draft'}</div>
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
              onClick={() => navigator.clipboard.writeText(categoryId.title)}
            >
             <Copy size={22}/> Copy 
            </DropdownMenuItem>
            <DropdownMenuSeparator />
           <Link href={`/dashboard/banners/update/${categoryId.id}`}> 
           <DropdownMenuItem className='text-green-500 space-x-2 hover:cursor-pointer '>
           <DropdownMenuSeparator />
            <Pen size={22} /> Edit</DropdownMenuItem></Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem><DeleteModal name={'Banner'} endpoint={`banners`} id={categoryId.id}/></DropdownMenuItem>
       
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

