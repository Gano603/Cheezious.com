import React, { useEffect, useRef, useState } from 'react'
import { PiForkKnifeFill } from "react-icons/pi";
import Cart_cards from './Cart_cards';

const Cart = ({ cartOpen, setcartOpen, cart, setcart }) => {

    const scrollPosition = useRef(0);
    const [prompt, setprompt] = useState(false);

    useEffect(() => {
        const cartElement = document.getElementById("cart");
        if (cartOpen) {
            scrollPosition.current = window.scrollY;
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
            cartElement.style.overflowY = 'auto'; // Enable scrolling within the cart
            cartElement.style.position = 'fixed';
            cartElement.style.top = '0';
            cartElement.style.right = '0';
            document.body.style.top = `-${scrollPosition.current}px`;
        } else {
            document.body.style.position = '';
            document.body.style.overflow = ''; // Prevent scrolling on body
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition.current);
        }
        console.log(cartOpen)
    }, [cartOpen]);


    return (
        <div>
            {cartOpen && <div className='fixed flex h-[100vh] w-[100vw] top-0 left-0 overflow-hidden bg-gray-400 z-20 bg-opacity-40'>
                <div onClick={() => setcartOpen(!cartOpen)} className='h-[100vh] w-[79vw]'></div>
                <div id="cart" className='h-[100vh] bg-white rounded-l-2xl w-[21vw]'>
                    <div className='flex justify-between py-3 px-4 items-center bg-slate-50'>
                        <h6 className='font-semibold text-lg'>Your Cart</h6>
                        <span onClick={() => setprompt(true)} className='text-yellow-500 underline text-lg font-semibold cursor-pointer'>Clear Cart</span>
                    </div>
                    <div className='relative h-full'>
                        {prompt && <div className='inset-0 bg-white absolute top-0 left-0 flex flex-col justify-center items-center'>
                            <p className='text-lg'>Do you Really want to clear the cart?</p>
                            <div className='flex my-4'>
                                <button onClick={() => {
                                    setcart({})
                                    setprompt(false)
                                }} className='bg-red-600 text-white rounded-md px-4 mx-2 py-2'>Yes</button>
                                <button onClick={() => setprompt(false)} className='underline px-4 mx-1 py-2'>No</button>
                            </div>
                        </div>}
                        {Object.keys(cart).length==0 && <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
                                <PiForkKnifeFill className='text-gray-500 h-40 w-40'/>
                                <p className='text-gray-500 text-xl'>Your Cart is Empty</p>
                        </div>}
                        {Object.keys(cart).map((index, iter) => (
                            <Cart_cards key={iter} cart={cart} setcart={setcart} index={index} />

                        ))}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart