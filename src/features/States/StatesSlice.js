import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const StateSlice = createSlice({
    name:'State',
    initialState,
    reducers:{
        setcartOpen:(state,action)=>{
            state["cartOpen"] = action.payload;
        }
    }
})

export const {setcartOpen} = StateSlice.actions;

export default StateSlice.reducer