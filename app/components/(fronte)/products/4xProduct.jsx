'use client'
import React, { useState } from 'react';

import FetchData from '@/lib/fetchData(client)';

import CartSidebar from '../CartSidebar';

import ProductExt from './ProductExt';



const Product = () => {
  const [products, setProducts] = useState([]);
  const [sideCart,setSideCart]=useState(false)
 

  return (
    <div>
    <div className={` cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
    <CartSidebar state={sideCart} setState={setSideCart}/></div>
      <section>
        <div className="px-2 mx-auto  max-w-7xl">
          <div className="grid sm:grid-cols-2 grid-cols-2 md:grid-cols-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            
            
            {products.length > 0 && (
              products.slice(0,16).map((product) => (
                <ProductExt product={product} key={product.id} />
              ))
            )}
          </div>
          <div className='mx-auto'>
              <FetchData  endpoint="products" setState={setProducts} state={products} />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
