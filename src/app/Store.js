import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import cardDetails from "../features/cardDetails/cardDetails";

export const Store = configureStore({
    reducer:{cart:cartReducer,
            cardDetails:cardDetails}
})