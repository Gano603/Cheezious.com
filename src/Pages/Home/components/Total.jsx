import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setcartOpen, setcheckout } from '../../../features/States/StatesSlice';
import axios from 'axios';
import { resetCart } from '../../../features/cart/cartSlice';

const Total = ({ subtotal, deliver_charges, grand_total, checkout }) => {
    const nav = useNavigate();
    const disp = useDispatch();
    const cart = useSelector(state => state.cart)
    const { name, email, phone, instruction, time, address } = useSelector(state => state.State)

    const buttonHandler = () => {
        if (checkout) {
            disp(setcartOpen(false))
            nav('/checkout')
        }
        else {
            if (name && email && phone && address) {
                axios.post(import.meta.env.VITE_API_URL + "/new",
                    { cart, name, email, phone, instruction, time, address }
                ).then(() => disp(resetCart())).then(() => nav('/'))
            }
            else disp(setcheckout(true))
        }
    }

    return (
        <div className='m-1 px-3'>
            <div className='border-t-2 border-yellow-400 bg-orange-100 mt-4 mb-2 px-2'><span className='text-xs text-gray-600'>You've got FREE Delivery!</span></div>
            <div className='flex justify-between my-1'><span className='text-[0.9rem] text-gray-700'>Subtotal</span><span className='text-[0.9rem] text-gray-700'>Rs. {subtotal}.00</span></div>
            <div className='flex justify-between my-1'><span className='text-[0.9rem] text-gray-700'>Delivery Charges</span><span className='text-[0.9rem] text-gray-700'>Rs. {deliver_charges}</span></div>
            <div className='flex justify-between mt-1'><span className='text-[1.1rem] text-gray-700 font-semibold'>Grand Total</span><span className='text-[1rem] text-gray-700 font-semibold'>Rs. {grand_total}.00</span></div>
            <button onClick={buttonHandler} className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>{checkout ? "Checkout" : "Place Order"}</button>
        </div>)
}

export default Total