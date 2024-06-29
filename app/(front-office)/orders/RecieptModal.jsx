import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from 'flowbite-react'
import Receipt from './receipt'
  
export default function RecieptModal({order}) {
  return (
    <Dialog>
    <DialogTrigger><Button outline gradientDuoTone="greenToBlue">
        Generate Reciept
      </Button></DialogTrigger>
 
  <DialogContent className='sm:w-[80%] md:w-[70%]'>
    <DialogHeader>
      <DialogTitle>Customer Reciept</DialogTitle>
      <DialogDescription>
        <Receipt order={order}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}
