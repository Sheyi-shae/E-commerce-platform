'use client'


import { ChevronRight } from 'lucide';
import ProductSliders from '../components/(fronte)/sliders/productSliders';
import MainHomepage from './Homepage';


export default function page() {
  return (
    <main className=" min-h-screen  dark:bg-slate-900 ">
    <MainHomepage/>
    <div className='px-3 '>
    <div className='w-full shadow-md dark:shadow-none  z-20 specialbg dark:bg-slate-800 p-2 '>
   
          {/* <Link href={'categoryproducts/electronics'}> */}
          <h2 className='text-left font-semibold  uppercase'>top electronic picks</h2>
          {/* <ChevronRight/></Link> */}
        </div>
    <ProductSliders/>
    </div>
  </main>
  )
}
