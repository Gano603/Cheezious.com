import React from 'react'
import { GoTrash } from "react-icons/go";
import { addQuantity, removeFromCart, subQuantity } from '../../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Cart_cards = ({ index }) => {

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        console.log(cart[index][0][4])
    }, [])
    const disp = useDispatch();
    return (
        <>
            <div className='flex mx-4 py-2 my-4 border-t-2 border-gray-300'>
                <img src={cart[index][0][0]} className='h-20 w-20 rounded-lg' />
                <div className='px-4'>
                    <h2 className='font-bold'>{index}</h2>
                    <h5 className={`text-[0.95rem] text-gray-500 ${cart[index][0][4] === undefined ? "" : "line-clamp-2"}`}>{cart[index][0][1]}</h5>
                    {cart[index][0][4] !== undefined &&
                        Object.keys(cart[index][0][4]).map((ind) => {
                            return (
                                <div className='my-1'>
                                    <h2 className='text-sm font-semibold'>{ind}</h2>
                                    {/* <span>{typeof cart[index][0][4][ind]}</span> */}
                                    {typeof cart[index][0][4][ind] === 'object' && cart[index][0][4][ind].map((index)=> (<div><span className='text-sm font-semibold text-gray-500'>{"1x "}</span><span className='text-[0.92rem] font-semibold text-gray-400'>{index}</span></div>))}
                                    {typeof cart[index][0][4][ind] === 'string' && <div><span className='text-sm font-semibold text-gray-500'>{"1x "}</span><span className='text-[0.92rem] font-semibold text-gray-400'>{cart[index][0][4][ind]}</span></div>}
                                </div>
                            )
                        })}
                    <p className='text-right font-semibold text-md my-2 text-gray-600'>Rs. {(parseInt(cart[index][0][2]) * cart[index][0][3])}.00</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <button onClick={() => disp(subQuantity(index))} className='bg-[rgb(210,0,0)] rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>-</button>
                            <span className='border-2  rounded-md py-1 px-2 text-sm'>{cart[index][0][3]}</span>
                            <button onClick={() => disp(addQuantity(index))} className='bg-[rgb(210,0,0)] rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>+</button>
                        </div>
                        <GoTrash onClick={() => disp(removeFromCart(index))} className='text-xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart_cards