'use client';
import { Trash2, Truck, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';

import { decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartslice';
import Link from 'next/link';
import { FormatCurrency } from './moneyinput';
import { Button } from 'flowbite-react';

export default function CartSidebar({ state, setState, toggleCart }) {
  const [clientRendered, setClientRendered] = useState(false);
  const cartItems = useSelector((store) => store.cart); // cart is it name in the reducer
 const dispatch = useDispatch();
  useEffect(() => {
    setClientRendered(true);
  }, []);

  if (!clientRendered) {
    return null; // Render nothing on the first render
  }

  const subTotal = cartItems?.reduce((acc, currentItem) => {
    return acc + currentItem.Discountedprice * currentItem.qty; //acc is the accumulator
  }, 0);

 

  function handleRemoveFromCart(cartId) {
    dispatch(removeFromCart(cartId));
  }

  function handleQtyIncrement(cartId) {
    dispatch(incrementQty(cartId));
  }

  function handleQtyDecrement(cartId) {
    dispatch(decrementQty(cartId));
  }

  return (
    <div
      className={`p-1 transition-all duration-1000 ${
        state
          ? 'bg-white dark:bg-slate-700 shadow-lg fixed overflow-y-scroll h-screen z-[24] top-0 right-0 w-[70%] md:w-[40%] lg:w-[30%]'
          : 'h-screen w-0'
      } overflow-hidden`}
    >
      <button
        onClick={() => setState(false)}
        className="bg-slate-800 rounded-full p-0 shadow-md"
      >
        <XCircle className="text-red-500" />
      </button>

      {/* main content */}
      <div className="p-2 flex flex-col gap-3 dark:text-slate-50">
        {/* delivery */}
        <div className="bg-slate-100 py-2 w-full flex gap-2 rounded-sm shadow-sm dark:bg-slate-600">
          <span>
            <Truck size={32} className="text-orange-500" />
          </span>
          <span className="roboto-light font-medium text-sm leading-7">
            Free delivery within ilorin
          </span>
        </div>

        {/* dynamic cart item */}
        {cartItems?.length > 0 ? (
          <div className="flex w-full roboto-light py-0 text-slate-600 rounded-sm dark:text-slate-50">
            <div className="flex flex-wrap gap-2">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 rounded-sm shadow-sm dark:bg-slate-400 dark:text-slate-50"
                >
                  <div className="w-2/6 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={112} // width adjusted to fixed value
                      height={112} // height adjusted to fixed value
                      className="object-cover h-20 w-20 md:h-28 md:w-28 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col w-4/6 gap-1 dark:text-slate-50">
                    <div className="capitalize line-clamp-2 text-slate-600 open-sans text-xs md:text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs roboto-light text-slate-400">
                      {item.qty} X {FormatCurrency(item.Discountedprice)}
                    </div>
                    <div className="flex mt-4">
                      <div className="ring-slate-200 dark:ring-slate-500 ring-1 shadow-sm rounded-l-sm">
                        <button
                          onClick={() => handleQtyDecrement(item.id)}
                          className="hover:bg-slate-200 text-slate-800 px-2 py-1 dark:hover:bg-slate-500"
                        >
                          -
                        </button>
                      </div>
                      <div
                        className="ring-slate-200 ring-1 dark:ring-slate-500 text-slate-600
               roboto-light px-6 p-1 overflow-hidden"
                      >
                        {item.qty}
                      </div>
                      <div className="ring-slate-200 ring-1 dark:ring-slate-500 shadow-sm rounded-r-sm">
                        <button
                          onClick={() => handleQtyIncrement(item.id)}
                          className="hover:bg-slate-2000 text-slate-800 px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/6 text-right">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 shadow-sm hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center p-3 px-9">
            <div className="relative mx-auto">
              <Image
                src={'/cart/empty_cart.png'}
                width={300}
                height={300}
                alt="empty_cart"
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="roboto-light text-sm md:text-lg text-center text-slate-900">
              Your cart is empty
            </div>
          </div>
        )}

        {/* cart end */}

        {/* checkout and order */}
      </div>

      <div className="absolute bottom-0 flex flex-col justify-center mb-2 gap-2 w-full dark:text-slate-50">
        <div className="flex flex-col gap-2 text-xs md:text-sm roboto-light text-slate-600 ring-1 ring-slate-200 rounded-sm px-2">
          <div className="flex justify-between font-semibold dark:text-slate-50">
            <div className="">Total</div>
            <div className="">{FormatCurrency(subTotal)}</div>
          </div>

          {/* */}
          <div className="text-xs text-slate-600">
            Coupon code be applied at checkout
          </div>
        </div>
        <div className="gap-1 md:gap-3 justify-evenly flex">
          {state && (
            <>
              <Link href={'/cart'} onClick={toggleCart}>
                <Button
                  onClick={() => setState(false)}
                  type="button"
                  className="px-10 md:px-10 bg-slate-50 montserrat"
                  gradientDuoTone="greenToBlue"
                >
                  My Cart
                </Button>
              </Link>

              <Link href={'/checkout'} onClick={toggleCart}>
                <Button
                  type="button"
                  
                  className="bg-slate-50 hidden md:block px-6 md:px-10 montserrat"
                  gradientDuoTone="pinkToOrange"
                >
                  Checkout
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
