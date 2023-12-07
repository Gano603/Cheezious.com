import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setcartOpen } from '../../../features/States/StatesSlice';


const Cart_resp_header = () => {
    const { total } = useSelector(state => state.State)
    const disp = useDispatch();
    return (
        <>
            {
                <div onClick={() => disp(setcartOpen(true))} className='sticky bottom-0 bg-yellow-400 h-20 flex justify-between px-8 sm:hidden'>
                    <div className='flex flex-col my-auto'>
                        <span className='text-[0.75rem]'>{total.items} items</span>
                        <span className='font-semibold'>Rs {total.gtotal}</span>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-semibold'>View Cart</p>
                        <span className='bg-black rounded-full mx-2'><IoIosArrowDown className='scale-25 h-5 text-xs text-white -rotate-90 mx-1' /></span>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart_resp_header