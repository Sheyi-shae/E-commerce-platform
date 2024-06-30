'use client'
import ProductSliders from '../components/(fronte)/sliders/productSliders';
import MainHomepage from './Homepage';
import { Suspense } from 'react';
import Loading from '../components/(fronte)/Loading';


export default function page() {
  
  return (
    <main className=" min-h-screen  dark:bg-slate-900 ">
    <Suspense fallback={<Loading/>}>
    <MainHomepage/>
    </Suspense>
    <div className='px-3 '>
    <div className='w-full shadow-md dark:shadow-none  z-20 specialbg dark:bg-slate-800 p-2 '>
   
          {/* <Link href={'categoryproducts/electronics'}> */}
          <h2 className='text-left font-semibold  uppercase'>top electronic picks</h2>
          {/* <ChevronRight/></Link> */}
        </div>
        <Suspense fallback={<Loading/>}>
    <ProductSliders/>
    </Suspense>
    </div>
  </main>
  )
}
