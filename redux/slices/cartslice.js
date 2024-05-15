//create slices
//create reducers
// export reducers and slices to store

const { createSlice } = require("@reduxjs/toolkit");
// get items saved in the localstorage if it exists first
//we are using typeof because of nextjs issue with local storage
const initialState= (typeof window !=="undefined" && JSON.parse(localStorage.getItem("cart")))|| [] // the cart's initial state is empty array
const cartSlice=createSlice({
    name:"cart",
    initialState,

    reducers:{
        addToCart:(state,action)=>{
            //data u need in a state
            const {id, imageUrl, qty, Discountedprice,title}=action.payload

        //check if item already exist in a cart
        const existingItem = state.find((item)=>item.id == id)

        if(existingItem){
          existingItem.qty +=1
        }else{
            const newItem ={id, imageUrl, qty,Discountedprice,title}
        state.push(newItem)
        //set new state in the localstorage
        if(typeof window !=="undefined"){
        localStorage.setItem("cart", JSON.stringify([...state]))}
    }

        },
        removeFromCart:(state,action)=>{
            const cartId=action.payload
            const newState= state.filter((item)=>item.id !== cartId)
            //update local storage
            if(typeof window !=="undefined"){
            localStorage.setItem("cart", JSON.stringify(newState))}
            return newState
        },
        incrementQty:(state,action)=>{
            const cartId=action.payload
           const cartItem= state.find((item)=>item.id == cartId)
           if(cartItem){
            cartItem.qty +=1
             //set new state in the localstorage
             if(typeof window !=="undefined"){
        localStorage.setItem("cart", JSON.stringify([...state]))}
           }
        },
        decrementQty:(state,action)=>{
            const cartId=action.payload
            const cartItem= state.find((item)=>item.id == cartId)
            if(cartItem && cartItem.qty > 1){
             cartItem.qty -=1
            }
             //set new state in the localstorage
             if(typeof window !=="undefined"){
        localStorage.setItem("cart", JSON.stringify([...state]))}

        },


    }
})

export const{addToCart,removeFromCart,incrementQty,decrementQty}=cartSlice.actions
export default cartSlice.reducer