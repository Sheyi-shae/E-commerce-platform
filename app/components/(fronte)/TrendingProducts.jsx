
import Link from "next/link";

import Product from "./products/4xProduct";

export default function TrendingProducts() {
  return (
    <div className='w-full  overflow-hidden md:px-2  -mt-10 md:-mt-2 montserrat'>
      <div className='w-full shadow-md dark:shadow-none  dark:bg-slate-700  specialbg flex justify-between p-2 items-center'>
        <div>
          <h2 className='dark:text-slate-200 text-sm text-slate-900  md:text-left font-semibold text-center  uppercase '>trending products</h2>
        </div>
        <div className=' hidden md:flex gap-3 text-sm '>
          <Link href={''} className='dark:text-pink-600 text-pink-500 transition-all duration-700 font-normal capitalize '>new arrival</Link>

          <Link href={''} className='text-slate-600 dark:text-slate-200 hover:text-pink-500 transition-all duration-700 font-normal capitalize'>top selling</Link>
        </div>
      </div>
      <div className="w-full -mt-5 md:mt-0">
        {/* <Product4x /> */}
        <Product/>

        
      </div>
    </div>
  );
}
