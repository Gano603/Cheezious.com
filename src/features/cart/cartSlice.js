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
            state[action.payload][0][3] += 1;
        },
        addcompQuantity: (state, action) => {
            state[Object.keys(action.payload)[0]] = Object.values(action.payload)
        },
        subQuantity: (state, action) => {
            if (state[action.payload][0][3] === 1) {
                delete state[action.payload];
            }
            else {
                state[action.payload][0][3] -= 1;
            }
        },
        resetCart: (state) => {
            Object.keys(state).forEach((index) => (
                delete state[index]
            ))
        },
        setCart: (state,action) => {
            return action.payload;
        }
    }
})

export const { addToCart, removeFromCart, addQuantity, subQuantity, resetCart, addcompQuantity, setCart } = cartSlice.actions

export default cartSlice.reducer