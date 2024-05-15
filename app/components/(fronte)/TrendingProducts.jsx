
import Link from "next/link";

import Product from "./products/4xProduct";

export default function TrendingProducts() {
  return (
    <div className='w-full md:max-h-[94vh] max-h-[203vh] overflow-hidden px-2 '>
      <div className='w-full shadow-md dark:shadow-none h-[5vh] dark:bg-slate-700 md:h-[7vh] bg-slate-200 flex justify-between px-1 items-center'>
        <div>
          <h2 className='dark:text-slate-200 text-sm  md:text-left font-semibold text-center  uppercase roboto-light'>trending products</h2>
        </div>
        <div className=' hidden md:flex gap-3 text-sm roboto-light'>
          <Link href={''} className='dark:text-yellow-600 text-yellow-500 transition-all duration-700 font-normal capitalize '>new arrival</Link>
          <Link href={''} className='text-slate-600 dark:text-slate-200 hover:text-yellow-500 transition-all duration-700 font-normal capitalize'>featured</Link>
          <Link href={''} className='text-slate-600 dark:text-slate-200 hover:text-yellow-500 transition-all duration-700 font-normal capitalize'>top selling</Link>
        </div>
      </div>
      <div className="w-full">
        {/* <Product4x /> */}
        <Product/>

        
      </div>
    </div>
  );
}
