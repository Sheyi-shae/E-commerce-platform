'use client'
import React, { useState } from 'react';
import StarRating from '../StarRating';
import FetchData from '@/lib/fetchData(client)';
import Image from 'next/image';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';


const Product = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div>
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-4">
            <FetchData endpoint="products" setState={setProducts} state={products} />
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="relative group bg-slate-200 ring-1 rounded-sm overflow-hidden h-[17rem] ring-slate-300"
                onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                <Link href={`/product/${product.id}`} title={product.title}>
                 <div className='w-full relative z-0 h-[60%]  bg-white dark:bg-slate-500'>
            <Image src={product.imageUrl} className='object-cover transition-all duration-500 group-hover:scale-105' alt={product.title} fill  />
          </div>
                 
                  <div className="flex items-start justify-between mt-4 space-x-4 ">
                    <div>
                      <h3 className="text-xs font-[500] roboto-light capitalize line-clamp-2 text-gray-800 w-[80%] sm:text-sm md:text-base">
                        
                          {product.title}
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        
                      </h3>
                      <div className="flex items-center mt-2.5 space-x-px">
                        <StarRating />
                      </div>
                    </div>
                    <div className="text-right flex w-1/2 justify-end">
                      <p className="text-sm font-serif font-semibold dark:text-yellow-600 text-yellow-600  ">&#x20A6; {product.price}</p>
                    </div>
                  </div>
                  </Link>
                 
                    <div className={`absolute bottom-0 w-full px-4 py-2 text-center
                     text-white transition duration-700 ease-in-out transform opacity-0 ${hoveredProduct === product.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>    
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                       <ShoppingBasket/>
                      </button>
                    </div>
                  
                </div>
              ))
            ) : (
              <img src='/preloaders/276.gif'/>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
