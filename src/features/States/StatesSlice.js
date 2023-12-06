import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const StateSlice = createSlice({
    name:'State',
    initialState,
    reducers:{
        setcartOpen:(state,action)=>{
            state["cartOpen"] = action.payload;
        },
        setname:(state,action)=>{
            state["name"] = action.payload;
        },
        setemail:(state,action)=>{
            state["email"] = action.payload;
        },
        setphone:(state,action)=>{
            state["phone"] = action.payload;
        },
        setinstruction:(state,action)=>{
            state["instruction"] = action.payload;
        },
        settime:(state,action)=>{
            state["time"] = action.payload;
        },
        setaddress:(state,action)=>{
            state["address"] = action.payload;
        },
        setcity:(state,action) =>{
            state["city"] = action.payload;
        },
        setsubcity:(state,action) =>{
            state["subcity"] = action.payload;
        }
    }
})

export const {setcartOpen,setemail,setname,setphone,setinstruction,settime,setaddress,setcity,setsubcity} = StateSlice.actions;

export default StateSlice.reducer