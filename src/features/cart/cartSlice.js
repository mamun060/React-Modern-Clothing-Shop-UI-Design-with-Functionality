import { createSlice } from "@reduxjs/toolkit";

// make initial state 
const initialState = [];

// create slice logic 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload})=>{
            const {id}  = payload;

            const getValue = state.find((item)=> item.id === id);

            if(getValue){
                return state.map((item)=> 
                item.id === id ? 
                {
                    ...item,
                    quantity: item.quantity + 1
                } : item );
            } else {
                state.push({
                    ...payload,
                    quantity: 1
                })
            }
        },
        increment :(state, {payload}) => {
            return state.map((item)=> 
            item.id === payload ? {
                ...item,
                quantity: item.quantity + 1
            } : item );
        },
        decrement: (state, {payload})=>{
            return state.map((item)=> 
            item.id === payload ? {
                ...item,
                quantity: item.quantity - 1
            }: item)
        },
        clear: (state)=>{
            return []
        }
    }
})

// export all item 
export default cartSlice.reducer;
export const { addToCart, increment, decrement, clear } = cartSlice.actions;