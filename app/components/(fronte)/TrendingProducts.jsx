import Link from "next/link";
import Product4x from "./products/4xProducts";
import Product from "./products/TestProduct";

export default function TrendingProducts() {
  return (
    <div className='w-full md:max-h-[94vh] max-h-[203vh] overflow-hidden px-2 '>
      <div className='w-full shadow-sm dark:shadow-none h-[4vh] dark:bg-slate-700 md:h-[5vh] bg-slate-300 flex justify-between px-1 items-center'>
        <div>
          <h2 className='dark:text-slate-200 text-sm  text-left font-semibold  uppercase roboto-light'>trending products</h2>
        </div>
        <div className='flex gap-2 text-sm'>
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
