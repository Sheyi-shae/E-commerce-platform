"use client"
import { Plus, PlusCircle, Tag, X } from 'lucide-react';
import React,{useState} from 'react'

export default function ArrayTagInput({setTags,tags}) {
    const[showTagForm,setShowTagForm]=useState(false)
  
  const[tag,setTag]=useState("");

  const addTag =()=>{
    if(!tag) return
    setTags([...tags,tag])//array
    setTag('')
  }
  const removeTag=(i)=>{
    //I is the index
    const newTags=[...tags]
    newTags.splice(i,1)
    setTags(newTags)
  }
  return (
    <div className='grid space-x-1 space-y-3 w-[40vw]  '>
    {showTagForm ? (<>
    
<div className="flex w-[80vw] md:w-full ">   
<label for="simple-search" className="sr-only">Search</label>
<div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Tag size={20}/>
    </div>
    <input onChange={(e)=>setTag(e.target.value)} value={tag} type="text" id="simple-search" className="bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full
      ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add new tag..." required />
</div>
<button type="button" onClick={addTag} className="p-2 ms-2 text-sm font-medium text-white dark:bg-green-700 rounded-lg border border-green-700 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-300 bg-black dark:hover:bg-green-500 dark:focus:ring-blue-800">
   <PlusCircle/>
    <span className="sr-only">Add</span>
</button>
<button onClick={()=>setShowTagForm(false)} type="button" className="p-2 ms-2 text-sm font-medium text-white dark:bg-red-700 rounded-lg border
 border-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none bg-red-600 dark:hover:bg-red-500">
   <X />
    <span className="sr-only">Close</span>
</button>
</div>

    </>
    ): (
      <button onClick={()=>setShowTagForm(true)} className='flex dark:text-slate-300 gap-1 '>
      <Plus size={20}/>
      <span>Add Tag (optional)</span>
    </button>
    )}
    <div className=''>
{tags.map((item,i)=>{
return (
<div key={i} className='inline-flex'>
<button onClick={()=>removeTag(i)} className=' flex mt-1 p-1 ml-1 bg-slate-100 shadow-sm dark:bg-slate-700
 dark:text-slate-200 rounded-sm' >
{item} <span><X size={22}/></span></button>
</div>)
})}

</div>
</div>

  )
}
