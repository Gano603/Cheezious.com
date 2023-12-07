import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "newWindow":[false],
    "total":{items:0,gtotal:0}
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
        },
        setnewWindow:(state,action) =>{
            state["newWindow"] = action.payload;
        },
        settotalitems:(state,action) =>{
            state["total"]["items"] = action.payload;
        },
        setgtotal:(state,action) =>{
            state["total"]["gtotal"] = action.payload;
        }
    }
})

export const {setcartOpen,setemail,setname,setphone,setinstruction,settime,setaddress,setcity,setsubcity,setnewWindow,setgtotal,settotalitems} = StateSlice.actions;

export default StateSlice.reducer