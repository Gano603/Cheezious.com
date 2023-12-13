import React, { useState } from 'react'
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setemail, setinstruction, setname, setphone, settime } from '../../../features/States/StatesSlice';


const LeftPanel = ({setaddWindow}) => {

    const disp = useDispatch();
    const {address,city,subcity,name,email,phone,checkout} = useSelector(state => state.State);

    return (
        <div className='w-full md-lg:w-4/6 mx-3 bg-slate-50 rounded-lg'>
            <div className='w-full flex flex-wrap'>
                <div className='w-[45%] xl:w-[31%] mx-2 h-max'>
                    <h3 className='my-2'>Full Name <span className='text-[rgb(210,0,0)]'>*</span></h3>
                    <span className={`text-xs text-[rgb(210,0,0)] ${checkout && !name? "":"hidden"}`}>This field is required</span>
                    <input type="text" required onChange={(e)=> disp(setname(e.target.value))} placeholder='Enter your Name' className={`border-[1px] h-10 rounded-3xl w-full outline-none px-4 ${!name && checkout? "border-[rgb(210,0,0)]":"border-slate-400"} `} />
                </div>
                <div className='w-[45%] xl:w-[31%] mx-2 h-max'>
                    <h3 className='my-2'>Mobile Number <span className='text-[rgb(210,0,0)]'>*</span></h3>
                    <span className={`text-xs text-[rgb(210,0,0)] ${checkout && !phone? "":"hidden"}`}>This field is required</span>
                    <input type="tel" pattern='/^0\d{3}-\d{7}$/' placeholder='0333-1234567' required onChange={(e)=> disp(setphone(e.target.value))} className={`border-[1px] h-10 rounded-3xl w-full outline-none px-4 ${checkout && !phone? "border-[rgb(210,0,0)]":"border-slate-400"} `} />
                </div>
                <div className='w-[45%] xl:w-[31%] mx-2 h-max'>
                    <h3 className='my-2'>Email Address <span className='text-[rgb(210,0,0)]'>*</span></h3>
                    <span className={`text-xs text-[rgb(210,0,0)] ${checkout && !email? "":"hidden"}`}>This field is required</span>
                    <input type="email" required onChange={(e)=> disp(setemail(e.target.value))}  placeholder='Enter your email address' className={`border-[1px] h-10 rounded-3xl w-full outline-none px-4 ${checkout && !email? "border-[rgb(210,0,0)]":"border-slate-400"} `} />
                </div>
            </div>
            <div>
                <div className='w-full mx-2 my-6'>
                    <h3 className='my-2'>Your Address <span className='text-[rgb(210,0,0)]'>*</span></h3>
                    <p className='text-slate-500'>{address? `${address},${subcity},${city}`:''}</p>
                    <p className={`text-xs text-[rgb(210,0,0)] ${checkout && !address? "":"hidden"}`}>This field is required</p>
                    <button className={`px-4 py-2 bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`} onClick={()=> setaddWindow(true)} title='Add to Cart'>Add/ Change Address</button>
                </div>
            </div>
            <div className='w-[96%] mx-2 h-max mt-20'>
                <h3 className='my-2'>Choose Delivery Time</h3>
                <input type="text" onChange={(e)=> disp(settime(e.target.value))}  placeholder='ASAP by default, or Click to select time.' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none px-4' />
            </div>
            <div className='w-[96%] mx-2 h-max'>
                <h3 className='my-2'>Special Instructions ( Optional )</h3>
                <textarea onChange={(e)=> disp(setinstruction(e.target.value))}  placeholder='Add any comment, e.g about Allergies, or delivery instructions here.' className='border-[1px] border-slate-400 h-28 rounded-3xl w-full outline-none px-4 py-3' />
            </div>
            <div className='w-full mx-2 h-max mt-20'>
                <h3 className='my-2'>Select Payment Method</h3>
                <button className={`px-4 py-2 border-[1px] border-yellow-400 rounded-3xl text-[0.8rem] mx-1 my-3 cursor-pointer flex items-center`} title='Add to Cart'>
                    <span className='mx-1 text-lg text-slate-600'><BsCashCoin /></span>
                    <span className='mx-1 text-slate-600'>Cash on Delivery</span></button>
            </div>

        </div>
    )
}

export default LeftPanel