const { createSlice } = require("@reduxjs/toolkit");
const initialState = {};

const couponSlice=createSlice({
    name:"coupon",
    initialState,
    reducers: {
        updateAmountPaid: (state, action) => {
            state.amountPaid = action.payload;
          },
          resetCoupon: (state) => {
            return initialState;
          },
    }
})
export const { updateAmountPaid,resetCoupon } = couponSlice.actions;
export default couponSlice.reducer;