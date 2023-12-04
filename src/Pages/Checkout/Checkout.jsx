import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import Total from '../Home/components/Total';
import Checkout_cards from './components/Checkout_cards';
import LeftPanel from './components/LeftPanel';



const Checkout = () => {
    const [quant, setquant] = useState(1);
    const nav = useNavigate();

    const disp = useDispatch();
    const cart = useSelector(state => state.cart)
    const [total, settotal] = useState(0);
    window.scrollTo(0, 0);

    useEffect(() => {
        let tot = 0
        Object.keys(cart).map((index) => {
            tot = tot + parseInt(cart[index][0][2]) * cart[index][0][3]
        })
        settotal(tot)
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.top = '';
    }, [cart])

    return (
        <div className='bg-white mt-[16vh] mb-[6vh] mx-0 xl:mx-[6vw] 2xl:mx-[12vw] px-4 pb-8 flex flex-col p-2 rounded-2xl'>
            <div className='flex items-center mb-6 mt-1'>
                <span onClick={() => nav('/')} className='text-[0.75rem] text-gray-400 hover:underline cursor-pointer'>Home</span>
                <IoIosArrowDown className='-rotate-90 mx-2 text-[0.7rem] text-gray-400' />
                <span className='text-[0.75rem] text-yellow-400'>Checkout</span>
            </div>
            <div className='flex w-full flex-col md-lg:flex-row'>
                <LeftPanel />
                <div className='my-10 md-lg:my-0 rounded-3xl overflow-hidden w-full md-lg:w-2/6 mx-3 bg-slate-50'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex justify-between py-3 px-4 items-center bg-slate-100'>
                            <h6 className='font-semibold text-lg'>Your Cart</h6>
                        </div>
                        <div className='h-full'>
                            {Object.keys(cart).map((index, iter) => (
                                <Checkout_cards key={iter} index={index} />
                            ))}
                        </div>
                        <div className='border-t-2 m-1 px-3'>
                            <div className='border-t-2 border-black bg-black bg-opacity-5 font-semibold mt-4 mb-2 px-2'><span className='text-xs text-gray-600'>*To apply Promo Code, please login</span></div>
                            <input type="text" placeholder='Promo Code' disabled className='border-[1px] disabled:placeholder:text-slate-300 bg-white border-slate-400 h-12 rounded-3xl w-[95%] outline-none px-4 mx-2' />
                        </div>
                        <Total checkout={false} subtotal={total} deliver_charges={"0.00"} grand_total={total} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout