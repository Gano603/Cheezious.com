import React from 'react'

const Total = ({subtotal , deliver_charges , grand_total}) => {
    return (
        <div className='border-t-2 m-1 px-3'>
            <div className='border-t-2 border-yellow-400 bg-orange-100 mt-4 mb-2 px-2'><span className='text-xs text-gray-600'>You've got FREE Delivery!</span></div>
            <div className='flex justify-between my-1'><span className='text-[0.9rem] text-gray-700'>Subtotal</span><span className='text-[0.9rem] text-gray-700'>Rs. {subtotal}.00</span></div>
            <div className='flex justify-between my-1'><span className='text-[0.9rem] text-gray-700'>Delivery Charges</span><span className='text-[0.9rem] text-gray-700'>Rs. {deliver_charges}</span></div>
            <div className='flex justify-between mt-1'><span className='text-[1.1rem] text-gray-700 font-semibold'>Grand Total</span><span className='text-[1rem] text-gray-700 font-semibold'>Rs. {grand_total}.00</span></div>
            <button className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>Checkout</button>
        </div>)
}

export default Total