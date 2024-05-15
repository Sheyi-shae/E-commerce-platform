import React from 'react'

export default function SearchInput() {
  return (
    <div className='z-[2] '>

        
<form className=" mx-auto z-[2] ">
    <div className="flex">
        <div className="relative w-full">
            <input type="search"  className="block p-2.5 w-full outline-yellow-500 md:w-[40vw] z-20  text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-yellow-700 focus:border-yellow-700 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Anything..." required />
            <button type="submit" className="absolute top-0 end-0 px-5 text-sm font-medium h-full text-white bg-yellow-500 rounded-e-lg border hover:bg-yellow-600 focus:ring-4 focus:outline-none dark:bg-yellow-700 dark:hover:bg-yellow-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

    </div>
  )
}
