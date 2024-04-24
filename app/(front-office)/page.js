import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Banner from "../components/(fronte)/Banner";
import Cards from "../components/(fronte)/Cards";
import TrendingProducts from "../components/(fronte)/TrendingProducts";
import Product4x from "../components/(fronte)/products/4xProducts";
import Testimonial from "../components/(fronte)/Testimonial";
import Newsletter from "../components/(fronte)/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col dark:bg-slate-800 items-center justify-between p-2">
      <Banner />
      <Cards />
      <div className="flex w-full flex-col gap-5 justify-center -mt-12 md:flex-row ">
        {/* Trending Products */}
        <div className="w-full md:w-[70%] p-2">
          <TrendingProducts />
          <div className="flex justify-center items-center py-4">
          <button className="uppercase p-3 bg-yellow-500 hover:text-yellow-500 hover:bg-slate-900 transition-all ease-in-out duration-700 ">view all</button></div>
        </div>
        {/* Testimonial */}
        <div className="w-full md:w-[30%]  p-5">
          <Testimonial/>
          <br/>
          <Newsletter/>
        </div>
        {/* End of Testimonial */}
      </div>
      
      {/* mini flashy banner */}
      <div className="flex  w-full  p-7">
      <div className="ring-black m-2 ring-1 w-1/4 h-full">
      <Image src={'/mini_banners/banner1.avif'}  width={900} height={1} 
        className='rounded-md object-cover w-full px-1 hover:p-1' alt=""/>
      </div>
      <div className=" w-3/4 h-full">
      <div className="h-[50%] w-full  flex ">
        <span  className="p-1 w-2/3"><Image src={'/mini_banners/banner2.webp'} width={730} height={200} 
        className='rounded-md object-cover px-1 hover:p-1 ' alt=""/></span>
        <span className="p-1 w-1/3 "><Image src={'/mini_banners/banner3.avif'}  width={500} height={300} 
        className='rounded-md object-cover px-1 hover:p-1' alt=""/></span>
      </div>
      <div className="h-1/2  ">
      <Image src={'/mini_banners/banner5.webp'}  width={900} height={1} 
        className='rounded-md object-cover w-full px-1 hover:p-1' alt=""/>
      </div>
      </div>


      </div>

      {/* end omini flashy banner */}
    </main>
  );
}
