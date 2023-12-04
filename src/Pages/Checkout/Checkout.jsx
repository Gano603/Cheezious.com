import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Total from '../Home/components/Total';
import Checkout_cards from './components/Checkout_cards';
import LeftPanel from './components/LeftPanel';
import { setaddress } from '../../features/States/StatesSlice';



const Checkout = () => {
    const [total, settotal] = useState(0);
    const [addWindow, setaddWindow] = useState(false);

    const nav = useNavigate();
    const disp = useDispatch();
    const cart = useSelector(state => state.cart)
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
        <>
            {addWindow && <>
                <div className='absolute inset-0 bg-black bg-opacity-25 z-30 backdrop-blur-md'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='bg-white w-[38rem] py-4 px-5 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <span>Add New Address</span>
                                <span onClick={()=> setaddWindow(false)} className='p-2 bg-gray-500 text-white cursor-pointer rounded-md'><ImCross /></span>
                            </div>
                            <div className='mx-2 h-max'>
                                <h3 className='my-2'>Address (with Post code if applicable)</h3>
                                <input type="text" onChange={(e) => disp(setaddress(e.target.value))} placeholder='Enter your complete street address' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none px-4' />
                            </div>
                            <div className='mx-2 h-max'>
                                <h3 className='my-2'>Area/City</h3>
                                <input type="text" placeholder='Enter your Area/City' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none px-4' />
                            </div>
                            <span className='text-sm text-gray-500'>To change your area/region, please do it from top header location button</span>
                            <button onClick={()=> setaddWindow(false)} className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>Save Address</button>
                        </div>

                    </div>
                </div>
            </>
            }
            <div className='bg-white mt-[16vh] mb-[6vh] mx-0 xl:mx-[6vw] 2xl:mx-[12vw] px-4 pb-8 flex flex-col p-2 rounded-2xl'>
                <div className='flex items-center mb-6 mt-1'>
                    <span onClick={() => nav('/')} className='text-[0.75rem] text-gray-400 hover:underline cursor-pointer'>Home</span>
                    <IoIosArrowDown className='-rotate-90 mx-2 text-[0.7rem] text-gray-400' />
                    <span className='text-[0.75rem] text-yellow-400'>Checkout</span>
                </div>
                <div className='flex w-full flex-col md-lg:flex-row'>
                    <LeftPanel setaddWindow={setaddWindow} />
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
        </>
    )
}

export default Checkout