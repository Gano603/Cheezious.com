import React from 'react'
import { useSelector } from 'react-redux'

const Checkout_cards = ({index}) => {

    const cart = useSelector(state => state.cart)

    return (
        <>
            <div className='flex mx-4 w-full py-2 px-4 my-4 border-t-2 border-gray-300'>
                <img src={cart[index][0][0]} className='h-20 w-20 rounded-lg' />
                <div className='px-4 w-full'>
                    <h2 className='font-bold'>{index}</h2>
                    <h5 className='text-[0.95rem] text-gray-500'>{cart[index][0][1]}</h5>
                    <p className='text-right font-semibold text-md my-2 text-gray-600'>Rs. {(parseInt(cart[index][0][2]) * cart[index][0][3])}.00</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <span className='border-2  rounded-md py-1 px-2 text-sm'>{cart[index][0][3]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout_cards