import { Button } from 'flowbite-react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Newsletter() {
    const socialIcons=[
        {icon:<Facebook className='text-blue-800'/>
       },{
        icon: <Twitter className='text-blue-500'/>
       },{
        icon:<Instagram className='text-pink-600'/>
       },{
        icon: <Linkedin className='text-blue-900'/>
       }
    ]
  return (
    <div className='specialbg dark:bg-slate-600 w-full montserrat rounded-sm h-[19rem] py-3'>
<h3 className='text-slate-800 dark:text-slate-900 p-4 uppercase  text-lg flex justify-center items-center'>Newsletter</h3>
<p className='text-slate-800 capitalize flex justify-center items-center text-sm'>join our mailing list</p>
<div className='flex flex-col items-center justify-center '>
    <input type='email' className='bg-inherit w-[80%] rounded-md ' placeholder='Email'/>
    <div className="flex justify-center items-center py-4">
    <Button type="button" className=" bg-slate-50 px-6 md:px-10 montserrat" disabled gradientDuoTone="pinkToOrange">
          
          Subscribe</Button></div>
       
</div>

<div className='flex items-center justify-center gap-2'>
{socialIcons.map((icon,i)=>(
<div key={i} className='bg-inherit flex items-center justify-center shadow-xl  hover:bg-red-400 w-10 h-10 rounded-full'>
{icon.icon}
</div>
))}
</div>
    </div>
  )
}
