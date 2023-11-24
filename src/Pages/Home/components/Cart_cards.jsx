import React from 'react'
import { GoTrash } from "react-icons/go";
import { addQuantity, removeFromCart, subQuantity } from '../../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Cart_cards = ({index}) => {    

    const cart = useSelector(state => state.cart)
    const disp = useDispatch();
    console.log
        return (
            <>
            <div className='flex mx-4 py-2 my-4 border-t-2 border-gray-300'>
                <img src={cart[index][0][0]} className='h-20 w-20 rounded-lg' />
                <div className='px-4'>
                    <h2 className='font-bold'>{index}</h2>
                    <h5 className='text-[0.95rem] text-gray-500'>{cart[index][0][1]}</h5>
                    <p className='text-right font-semibold text-md my-2 text-gray-600'>Rs. {(parseInt(cart[index][0][2])*cart[index][0][3])}.00</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <button onClick={()=> disp(subQuantity(index))} className='bg-[rgb(210,0,0)] rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>-</button>
                            <span className='border-2  rounded-md py-1 px-2 text-sm'>{cart[index][0][3]}</span>
                            <button onClick={() => disp(addQuantity(index))} className='bg-[rgb(210,0,0)] rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>+</button>
                        </div>
                        <GoTrash onClick={()=> disp(removeFromCart(index))} className='text-xl cursor-pointer' />
                    </div>
                </div>
            </div>
            </>
        )
    }

    export default Cart_cards