
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    //form is an objeect so the initial state of this form will be an empty object
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  };
  const checkoutSlice=createSlice({
    name:"checkout",
    initialState,
    reducers: {
        updateStep1: (state, action) => {
            state.step1 = action.payload;
          },
          updateStep2: (state, action) => {
            state.step2 = action.payload;
          },
          updateStep3: (state, action) => {
            state.step3 = action.payload;
          },
          updateStep4: (state, action) => {
            state.step4 = action.payload;
          },

          resetCheckout: (state) => {
            return initialState ;
          },
        }
  })

export const { updateStep1, updateStep2, updateStep3, updateStep4 ,resetCheckout} = checkoutSlice.actions;
export default checkoutSlice.reducer;