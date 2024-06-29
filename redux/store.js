import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";
import checkoutSlice from "./slices/checkoutSlice";
import couponSlice from "./slices/couponSlice";

export const store = configureStore({
    // wrap the store around the children (providers)
    reducer:{
        //slices here
        cart:cartslice,
        checkout:checkoutSlice,
        coupon:couponSlice

    },
   
})