import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state[Object.keys(action.payload)[0]] = Object.values(action.payload)
        },
        removeFromCart: (state, action) => {
            delete state[action.payload];
        },
        addQuantity: (state, action) => {
            const card = action.payload;
            state[Object.keys(action.payload)] = Object.values(action.payload)
        },
        subQuantity: (state, action) => {
            if (state[action.payload][3] == 1) {
                delete state[action.payload];
            }
            else {
                state[action.payload][3] -= 1;
            }
        },
        resetCart:(state)=>{
            Object.keys(state).map((index)=>(
                delete state[index]
            ))
        }
    }
})

export const {addToCart,removeFromCart,addQuantity,subQuantity,resetCart} = cartSlice.actions

export default cartSlice.reducer