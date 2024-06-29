'use client'

import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { Button, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderComponent } from './OrderComponent';
import LoadingDots from '../regForms/LoadingDots';

import { resetCart } from '@/redux/slices/cartslice';
import Swal from 'sweetalert2'
import { resetCheckout } from '@/redux/slices/checkoutSlice';
import { resetCoupon } from '@/redux/slices/couponSlice';
import { useRouter } from 'next/navigation';

export default function OrderSummary({ sessions, onPrevious }) {
  const router =useRouter()
  const [loading, setLoading] = useState(false);

  const shippingDetails = useSelector((state) => state.checkout.step2);
  const paymentMethod = useSelector((state) => state.checkout.step3);
  const cartItems = useSelector((store) => store.cart);
  const amountPaid = useSelector((state) => state.coupon.amountPaid);
  const subTotal = cartItems?.reduce((acc, currentItem) => {
    return acc + (currentItem.Discountedprice * currentItem.qty); // acc is the accumulator for redux
  }, 0);

  const id = sessions.user.id;
  const userDetails = sessions.user;
const dispatch=useDispatch()
  let shippingAddress;
  if (!shippingDetails.address) {
    shippingAddress = sessions.user.address;
  } else {
    shippingAddress = shippingDetails.address;
  }

  const combinedData = { ...shippingDetails, ...paymentMethod };
  const order = {
    product: cartItems,
    ...userDetails,
    ...combinedData,
    totalPrice: subTotal,
    userId: id,
    shipping: shippingAddress,
    amountPaid:amountPaid
  };

  const saveAddress = combinedData.SaveAddress;

  async function handleSubmit() {
    try {
      setLoading(true);
      if (saveAddress === true) {
        const data = combinedData;
        await makePutRequest(
          setLoading,
          `api/register/${id}`,
          data,
          'address'
        );
       
      }

      await makePostRequest(
        setLoading, 
        'api/order',
        order,
        'order'
     

      )
      
      dispatch(resetCart())
      dispatch(resetCheckout())
      dispatch(resetCoupon())
      let timerInterval;
      Swal.fire({
        title: "Order Successfully Placed!",
        html: "You will be redirected to orders page",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
           timer.textContent = `${Swal.getTimerLeft()}`;
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          
        }
      });
      router.push('/orders')

      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className='hidden md:block'>
        <OrderComponent />
        
      </div>

<div className='flex gap-3 mt-3'>
      <Button gradientDuoTone="pinkToOrange" outline onClick={onPrevious} type="button" className=" bg-slate-50 montserrat">
        Previous
      </Button>
      {loading ? (
        <Button gradientDuoTone="pinkToOrange" disabled type="submit" className="px-4 montserrat ">
          Processing <LoadingDots/>
        </Button>
      ) : (
        <Button gradientDuoTone="pinkToOrange" type="submit" onClick={handleSubmit} className="px-4 montserrat ">
          Place Order
        </Button>
      )}
      </div>
    </div>
  );
}
