"use client"
import FetchData from '@/lib/fetchData(client)';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


export default function CategoriesData() {
    const [categories,setCategories]=useState([])

    //fetch categories data
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/categories`, {
//         cache: "no-store",
//       });
//       const data = await response.json();
//       setCategories(data)
      
        
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
//     fetchData();
//   }, [categories]);


//date format
const formatDate = (originalDate) => {
    const dd = String(originalDate.getDate()).padStart(2, '0');
    const mm = String(originalDate.getMonth() + 1).padStart(2, '0');
    const yyyy = originalDate.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };
//open link in new tab

    const handleLinkClick = (e) => {
      e.preventDefault();
      window.open(e.target.href, '_blank');
    }



    const [currentPage, setCurrentPage]=useState(1)
    const pageSize=10;
    const startIndex= (currentPage-1)*pageSize;
    const endIndex= startIndex+pageSize
    const pageCount =Math.ceil(categories.length/pageSize);

    // const pageIndex=table_data.slice(0,10)
    const pageIndex=categories.slice(startIndex,endIndex)
    
  
  return (
    <>
    {/* fetching data using the reusable useEffect hook */}
<FetchData endpoint="categories" setState={setCategories} state={categories} />
{/* fetching data using the reusable useEffect hook */}
    <div className='dark:bg-slate-700 bg-slate-100 shadow-md dark:shadow-none  shadow-slate-300 p-2 '>
<h2 className='capitalize text-center font-normal text-lg dark:text-white ring-0 ring-slate-400 shadow-md
 shadow-black p-0'>avalaible categories</h2>

 
<div className="relative overflow-x-auto shadow-md sm:rounded-sm p-1 overflow-hidden z-0">
    <table className="w-full text-sm text-left z-0 rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-3">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
               
                <th scope="col" className="px-3 py-1  md:block md:mt-3 ">
                    Category Title
                </th>
               
                <th scope="col" className="px-3 py-1">
                Category Description
                </th>
                
                <th scope="col" className="px-3   py-1 ">
                Category Image
                </th>
                <th scope="col" className="px-3 py-1  md:block">
                    Date Created
                </th>
                <th scope="col" className="px-3 py-1">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {pageIndex.map((item,i)=>{
            return(
             <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
              
                <td className="px-3 py-1   capitalize ">
                   {item.title}
                </td>
                
                <th scope="row" className="px-3 py-1  md:font-medium
                 text-gray-600  dark:text-white">
                    {item.description}
                </th>
               
                <td className="px-3 py-1">
                <a href={item.imageURL} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:blur-0">
        <Image src={item.imageURL} height={150} width={150} alt='desc'/>
      </a>
                </td>
                <td className="px-3 py-1 ">
                {formatDate(new Date(item.createdAt)) }
                
                </td>
                <td className="px-3 py-1">
                    <a href="#" className="font-medium text-lime-600  dark:text-lime-500 hover:underline">Edit</a>
                </td>
            </tr>   
            )
        })}
            
            
            
        </tbody>
    </table>
    <nav className="flex items-center flex-column overflow-hidden flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-xs font-normal text-gray-600 dark:text-gray-700 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">
        {startIndex+1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{categories.length}</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==startIndex+1} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500
                 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                   dark:hover:text-white disabled:cursor-not-allowed">Previous</button>
            </li>
            {/* {Array.from({iterable},mapFunction)} */}
           
           {Array.from({length:pageCount},(_,i)=>{
                return(
                     <li key={i} className=' hidden md:block' >
                <button onClick={()=>setCurrentPage(i+1 )} className={currentPage==i+1 ? ' flex items-center justify-center px-3 h-8 leading-tight text-gray-500  bg-lime-500 border border-gray-30  dark:bg-lime-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700  dark:hover:text-white' : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}>{i+1}</button>
            </li>
                )
            })}
           
           
            
            <li>
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==pageCount} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
         bg-white border border-gray-300 rounded-e-lg hover:bg-lime-200 hover:text-gray-700
          dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
           dark:hover:text-white disabled:cursor-not-allowed pr-8 text-center md:pr-2">Next</button>
            </li>
        </ul>
    </nav>
</div>

    </div></>
  )
}
