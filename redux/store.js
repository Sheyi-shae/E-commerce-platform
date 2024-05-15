import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";

export const store = configureStore({
    reducer:{
        //slices here
        cart:cartslice // wrap it around the children (providers)
    }
})