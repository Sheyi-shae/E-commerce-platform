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
    <div className='bg-slate-100 dark:bg-slate-400 w-full h-[19rem]'>
<h3 className='text-black p-4 uppercase font-bold text-lg flex justify-center items-center'>Newsletter</h3>
<p className='text-slate-600 capitalize flex justify-center items-center text-lg'>join our mailing list</p>
<div className='flex flex-col items-center justify-center '>
    <input type='email' className='bg-inherit w-[80%] rounded-md focus:ring-yellow-500 outline-yellow-500 focus:border-yellow-500 ' placeholder='Email'/>
    <div className="flex justify-center items-center py-4">
          <button className="uppercase p-3 bg-yellow-500 hover:text-yellow-500 hover:bg-slate-900
           transition-all ease-in-out duration-700 dark:bg-slate-900 dark:text-yellow-600 ">Subscribe</button></div>
       
</div>

<div className='flex items-center justify-center gap-2'>
{socialIcons.map((icon,i)=>(
<div key={i} className='bg-inherit flex items-center justify-center shadow-sm shadow-slate-800 hover:bg-yellow-500 w-10 h-10 rounded-full'>
{icon.icon}
</div>
))}
</div>
    </div>
  )
}
