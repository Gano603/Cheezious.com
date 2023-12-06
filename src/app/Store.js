import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import cardDetails from "../features/cardDetails/cardDetails";
import State_handler from "../features/States/StatesSlice";
import cities from "../features/cityDetails/cityDetails";

export const Store = configureStore({
    reducer:{cart:cartReducer,
            cardDetails:cardDetails,
            State:State_handler,
            cities}
})