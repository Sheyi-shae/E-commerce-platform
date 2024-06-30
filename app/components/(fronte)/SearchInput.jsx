import { Button ,  Modal, Spinner} from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from "react";
import LoadingDots from './regForms/LoadingDots';
import Image from 'next/image';
import Link from 'next/link';

export  function SearchInput({openModal, setOpenModal}) {
    
  return (
    <div className='z-[2] '>

        
<form className="w-[36rem] mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" readOnly onClick={() => setOpenModal(true)} className="block hover:cursor-pointer w-full p-4 ps-10 text-sm
         text-gray-900 border border-gray-300 focus:ring-red-200 focus:ring-2 outline-none rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Products,Categories..." required />
        {/* <Button type="button" className="montserrat"  gradientDuoTone="pinkToOrange">
          Search
          </Button> */}
    </div>
</form>


    </div>
  )
}

export default function SearchModal(){
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading]=useState(false)
    useEffect(() => {
      const delayDebounceFn = setTimeout(async () => {
        if (searchTerm) {
          const query = new URLSearchParams();
          query.append('title', searchTerm);
          query.append('tag', searchTerm);
  
          try {
            setLoading(true)
            const res = await fetch(`/api/search?${query.toString()}`);
            const data = await res.json();
            setResults(data);
            setLoading(false)
          } catch (error) {
            console.error('Error fetching search results:', error);
            setLoading(false)
          }
        } else {
          setResults([]);
          setLoading(false)
        }
      }, 200); // Adjust the debounce delay as needed
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchTerm])
    return(
        <>
       <SearchInput openModal={openModal} setOpenModal={setOpenModal} />
        <Modal  dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
          <div className="relative w-[110%]">
         
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search"  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} className="block w-full p-4 ps-10 text-sm
         text-gray-900 border border-gray-300 focus:ring-red-200 focus:ring-2 outline-none rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Products,Categories..." required />
     
    </div>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
            {results.length > 0 ? (
            <div className='flex flex-col gap-2 '>
        {results?.map((product) => (
          <Link key={product.id} onClick={() => setOpenModal(false)} href={`/product/${product.slug}`} >
          <div className='justify-between text-slate-800 dark:text-slate-900 hover:bg-red-100 hover:text-slate-700 text-sm flex p-1 rounded-sm  w-full'>
          <div className='relative h-12  w-1/6'>
        <Image src={product.imageUrl} fill alt='productImage'  className='object-cover w-16 h-16 absolute '/>
         </div>
         <div className='line-clamp-1 w-4/6'>{product.title}</div>
        <div className=''>&#x20A6; {product.Discountedprice}</div>
          </div></Link>
        ))}
      </div>)
      : (
        <>
        <Spinner size={'lg'} color={'red'}/>
        </>
      )}
            
            </div>
          </Modal.Body>
          <Modal.Footer>
           {searchTerm && <Link className='text-xs' onClick={()=>setOpenModal(false)} href={`/search/${searchTerm}`}>More related results</Link>}
          </Modal.Footer>
        </Modal>
      </>
    )
}
