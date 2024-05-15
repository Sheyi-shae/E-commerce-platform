'use client'
import React, { useState } from 'react';
import StarRating from '../StarRating';
import FetchData from '@/lib/fetchData(client)';
import Image from 'next/image';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import CartSidebar from '../CartSidebar';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartslice';
import toast from 'react-hot-toast';
import ProductExt from './ProductExt';


const Product = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };
  
  const [sideCart,setSideCart]=useState(false)

  

 

  return (
    <div>
    <div className={` cartbar ${sideCart ? 'cartopen' : 'cartclose'}`}>
    <CartSidebar state={sideCart} setState={setSideCart}/></div>
      <section>
        <div className="px-2 mx-auto  max-w-7xl">
          <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <FetchData endpoint="products" setState={setProducts} state={products} />
            {products.length > 0 ? (
              products.map((product) => (
                <ProductExt product={product} key={product.id} handleMouseEnter={handleMouseEnter} 
                handleMouseLeave={handleMouseLeave} hoveredProduct={hoveredProduct}/>
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
