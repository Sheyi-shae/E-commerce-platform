"use client"
import Image from 'next/image';
import { MoreHorizontal,ArrowUpDown, Edit, Delete, Trash, Trash2, SortAsc, Pen, Copy, Eye, Plus } from "lucide-react"

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
import { FormatCurrency } from '@/app/components/(fronte)/moneyinput';
import { StatusModal } from './StatusModal';


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
   accessorKey: "id",
    header: () => <div className="">Order ID</div>,
    cell: ({ row }) => {
        const id = (row.getValue("id"))
        
 
      return <div className=" capitalize font-medium line-clamp-2">{'SE-'+id}</div>
    },
  },
  {
    accessorKey: "firstName",
    // accessorKey: "lastName",
    header: () => <div className="">Customer Name</div>,
    cell: ({ row }) => {
        const firstName = (row.getValue("firstName"))
        const lastName = (row.getValue("lastName"))
        
 
      return <div className=" font-medium line-clamp-1 capitalize">{firstName }</div>
    },
  },
  {
    accessorKey: "address",
    header:() => <div className="">Customer Address</div>,
    cell: ({ row }) => {
      const address = (row.getValue("address"))
      
 
      return <div className=" font-medium line-clamp-1">{address}</div>
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
    header: () => <div className="">Date</div>,
    cell: ({ row }) => {
      const date =(row.getValue("createdAt"))
    
 
      return <div className=" font-medium">{formatDate(new Date(date))}</div>
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="">Total Price</div>,
    cell: ({ row }) => {
      const amount =(row.getValue("totalPrice"))
    
 
      return <div className=" font-medium">{FormatCurrency( amount)}</div>
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="">Order Status</div>,
    cell: ({ row }) => {
      const status =(row.getValue("status"))
    
 
      return <div className=" montserrat font-medium">
        {status==='PROCESSING' && <p className='text-yellow-600'>{status}</p>}
        {status==='FAILED' && <p className='text-red-700'>{status}</p>}
        {status==='SUCCESS' && <p className='text-green-600'>{status}</p>}
      </div>
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
           <Link href={`/dashboard/orders/order_details/${customerId.id}`}> 
           <DropdownMenuItem className='text-green-500 space-x-2 hover:cursor-pointer '>
           <DropdownMenuSeparator />
            <Eye size={20} />More Details</DropdownMenuItem></Link>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem><DeleteModal name={'Product'} endpoint={`products`} id={productId.id}/>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
