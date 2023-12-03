import React, { useEffect, useRef, useState } from 'react'
import Cart_cards from './Cart_cards';
import EmptyCarrt from './EmptyCarrt';
import Total from './Total';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../../../features/cart/cartSlice';
import { setcartOpen } from '../../../features/States/StatesSlice';


const Cart = () => {

    const cart = useSelector(state => state.cart)
    const States = useSelector(state => state.State)
    const disp = useDispatch();
    const scrollPosition = useRef(0);
    const [prompt, setprompt] = useState(false);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const cartElement = document.getElementById("cart");
        if (States["cartOpen"]) {
            scrollPosition.current = window.scrollY;
            document.body.style.overflow = 'hidden';
            cartElement.style.overflowY = 'auto';
            cartElement.style.position = 'fixed';
            cartElement.style.top = '0';
            cartElement.style.right = '0';
            document.body.style.top = `-${scrollPosition.current}px`;
        } else {
            document.body.style.position = '';
            document.body.style.overflow = '';
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition.current);
        }
    }, [States["cartOpen"]]);

    useEffect(() => {
        let tot=0
      Object.keys(cart).map((index)=>{
       tot = tot + parseInt(cart[index][0][2])*cart[index][0][3]
      })
      settotal(tot)
    }, [cart])
    
    return (
        <div>
            {States["cartOpen"] && <div className='fixed flex h-[100vh] w-[100vw] top-0 left-0 overflow-hidden bg-black bg-opacity-60 z-20'>
                <div onClick={() => disp(setcartOpen(false))} className='h-[100vh] w-[79vw]'></div>
                <div id="cart" className='h-[100vh] bg-white rounded-l-2xl w-96'>
                    <div className='flex flex-col justify-between h-full'>
                        <div className='flex justify-between py-3 px-4 items-center bg-slate-50'>
                            <h6 className='font-semibold text-lg'>Your Cart</h6>
                            <span onClick={() => setprompt(true)} className='text-yellow-500 underline text-lg font-semibold cursor-pointer'>Clear Cart</span>
                        </div>
                        {prompt && <div className='inset-0 bg-white absolute top-0 left-0 flex flex-col justify-center items-center'>
                            <p className='text-lg'>Do you Really want to clear the cart?</p>
                            <div className='flex my-4'>
                                <button onClick={() => {
                                    disp(resetCart())
                                    setprompt(false)
                                }} className='bg-red-600 text-white rounded-md px-4 mx-2 py-2'>Yes</button>
                                <button onClick={() => setprompt(false)} className='underline px-4 mx-1 py-2'>No</button>
                            </div>
                        </div>}
                        <EmptyCarrt cond={Object.keys(cart).length == 0} />
                        {Object.keys(cart).length > 0 && <><div className='h-full overflow-y-auto'>
                            {Object.keys(cart).map((index, iter) => (
                                <Cart_cards key={iter} index={index} />
                            ))}
                        </div>
                            <div className='border-t-2'>
                            <Total checkout={true} subtotal={total} deliver_charges={"0.00"} grand_total={total} /></div> </>}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart