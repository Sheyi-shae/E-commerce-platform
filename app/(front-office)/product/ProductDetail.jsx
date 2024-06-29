"use client"
import Quantity from '@/app/components/(fronte)/products/Quanitty'
import WishlistBtn from '@/app/components/(fronte)/products/WishlistBtn'
import { addToCart } from '@/redux/slices/cartslice'
import { Progress } from 'flowbite-react'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'


export default function ProductDetail({product}) {
    const [mainImg,setMainImg]=useState(product.imageUrl)
    const [showQuantity, setShowQuantity]=useState(false)
    
    const allImages=product.productImages
    const tags=product.tags
   

    const dispatch=useDispatch() //for triggering or calling
    const handleAddtocart= ()=>{
      dispatch(addToCart(product)) //product must be in object form{mapped from an array}
      toast.success("Item added to cart")
      setShowQuantity(true)

      // setSideCart(true)
    
    }
  
    
    const calculateAverageRating = (reviews) => {//takes in sll the reviews
      if (reviews?.length === 0) return 0; 
      const totalRating = reviews?.reduce((sum, review) => sum + review?.ratings, 0);//reduce function extracts all the ratings
      //and sums it up
      return totalRating / reviews?.length; 
    };

    //progress bar logic
    const highStock=50
    const currentStock=product.stock
    const stockPercentage= (currentStock/highStock)*100
    
  return (
    <div>
   
    <div className='flex md:flex-row flex-col gap-4 md:gap-7 montserrat  py-8  w-full  '>
    {/* product image */}
        <div className='relative w-full h-[60vh] md:w-1/2  ring-slate-200 ring-1 overflow-hidden cursor-zoom-in'>
        <Image src={mainImg} fill alt=''  className='object-contain absolute hover:scale-150
         hover:transition-transform hover:duration-300  '/>
         {/* images benaeth */}
         
        </div>
        <div className='flex md:hidden gap-2 w-full justify-center  mb-10'>
    {allImages?.map((img,i)=>(
            <div key={i} className='w-12 h-12 ring-1 ring-slate-300 shadow-md'>
            <Image src={img} onClick={()=>setMainImg(img)} width={200} height={200} alt=''  className='hover:cursor-pointer object-cover  h-12 w-12 '/> 
            </div>
         ))}
    </div>
        <div className='w-full px-8 md:px-5 lg:px-3 grid grid-cols-1  md:w-1/2 '>
        <h3 className='montserrat text-lg font-bold  md:text-2xl capitalize text-slate-700'>{product.title}</h3>
        
       <div className='flex gap-2 '>
       <p className=" font-serif font-semibold dark:text-pink-700 text-pink-600 text-lg md:text-2xl ">&#x20A6; {product.Discountedprice}</p>
       <p className="  font-normal  text-sm text-slate-500 dark:text-slate7900 line-through md:text-lg ">&#x20A6; {product.Origninalprice}</p>
       </div>

       <div className="flex items-center ">
          {[...Array(5)].map((star,index)=>{
   const ratingValue= index + 1;
   
   return(
    
    <div  key={index}>
    <label className='hover:cursor-pointer'>
    <input type='radio' className='hidden ' value={ratingValue} />
      <p className={`md:text-lg   ${ratingValue <= calculateAverageRating(product.reviews) ?
       "text-yellow-300 " : "text-slate-600 " }`}>&#9733;</p></label>
       
    </div> )
 })}
          </div>
       <div className='roboto-light  text-slate-500 mt-4 '>
      
      <span className='font-normal'>Product tags:</span><span className='font-light text-sm'>
       
          <span className='space-x-2' >{tags.join(', ' )},</span>
       
      </span>
      </div>

{/* adding product to wish list */}
 <WishlistBtn product={product}/>
{/* wishlist ends here */}
     
      
   {/* stock count */}
   {stockPercentage < 50 ? (
    <>
    <div className="text-base font-medium ">Hurry! Only <span className='blinking-text text-red-700'>{currentStock}</span> units left in stock</div>
      <Progress progress={stockPercentage} color="red" />
      </>
   ) :(
    <>
    <div className="text-base font-medium ">{currentStock} units left in stock</div>
      <Progress progress={stockPercentage} color="green" />
      </>
   )}
      
      
      {/* stock ends */}
       <div className=' mt-2 md:mb-14'>
       <Quantity 
       handleAddtocart={handleAddtocart}
        price={product.Discountedprice} 
        // qty={product.qty}
        id={product.id}
          showQuantity={showQuantity}
          setShowQuantity={setShowQuantity}
        /></div>

       

       
        </div>
       
       
    </div>
    {/* benaeth images */}
    <div className='md:flex hidden gap-2 w-1/2 justify-center  -mt-7 pb-6'>
    {allImages.map((img,i)=>(
            <div key={i} className='w-12 h-12 ring-1 ring-slate-300 shadow-md'>
            <Image src={img} onClick={()=>setMainImg(img)} width={200} height={200} alt=''  className='hover:cursor-pointer object-cover  h-12 w-12 '/> 
            </div>
         ))}
    </div>
    
    </div>
  )
}
