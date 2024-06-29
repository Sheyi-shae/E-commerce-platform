const { createSlice } = require("@reduxjs/toolkit");

// Get items saved in localStorage if they exist, for handling SSR (server-side rendering) with Next.js.
const initialState = (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) || [];

// Create cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, imageUrl, qty,  Discountedprice, title } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                existingItem.qty += qty;
            } else {
                const newItem = { id, imageUrl, qty, Discountedprice, title };
                state.push(newItem);
            }

            // Update local storage
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify(state));
            }
        },
        removeFromCart: (state, action) => {
            const cartId = action.payload;
            const newState = state.filter(item => item.id !== cartId);

            // Update local storage
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify(newState));
            }

            return newState;
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find(item => item.id === cartId);

            if (cartItem) {
                cartItem.qty += 1;

                // Update local storage
                if (typeof window !== "undefined") {
                    localStorage.setItem("cart", JSON.stringify(state));
                }
            }
        },
        decrementQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find(item => item.id === cartId);

            if (cartItem && cartItem.qty > 1) {
                cartItem.qty -= 1;

                // Update local storage
                if (typeof window !== "undefined") {
                    localStorage.setItem("cart", JSON.stringify(state));
                }
            }
        },
        resetCart: () => {
            // Clear local storage
            if (typeof window !== "undefined") {
                localStorage.removeItem("cart");
            }

            return [];
        },
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart, incrementQty, decrementQty, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
