import React, { useEffect, useRef, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setaddWindow, setcartOpen, setgtotal, settotalitems } from '../../features/States/StatesSlice';
import Onload_window from './Onload_window'



const Navbar = () => {
  const cart = useSelector(state => state.cart)
  const {total,city,subcity,addWindow} = useSelector(state => state.State) || null;
  const nav = useNavigate();
  const disp = useDispatch();
  const scrollPosition = useRef(0);

  useEffect(() => {
    let totit = 0;
    let tot = 0
    Object.keys(cart).map((index) => {
      totit = totit + cart[index][0][3];
      tot = tot + parseInt(cart[index][0][2]) * cart[index][0][3]
    })
    disp(settotalitems(totit))
    disp(setgtotal(tot))
  }, [cart])


  useEffect(() => {
    const cartElement = document.getElementById("window");
    if (addWindow) {
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
}, [addWindow]);


  return (<>
    {addWindow && <Onload_window />}
    <div className='h-20 bg-yellow-400 flex items-center shadow-md w-[100vw] fixed left-0 top-0 z-20'>
      <div className='mx-4 md-lg:mx-14 xl:mx-28 flex w-full'>
        <div className='w-full flex md-lg:flex-row-reverse'>
          <div className='flex justify-center w-max md-lg:w-full relative'>
            <img src="/assets/img/1649325481.webp" alt="Cheezious Logo"
              className='h-20 w-20' />
            <div onClick={() => nav("/")} className='absolute inset-0 cursor-pointer'></div>
          </div>
          <div onClick={() => disp(setaddWindow(true))} className='flex items-center cursor-pointer'>
            <FaLocationDot className='text-3xl mx-1 fill-red-600' />
            <div className='flex flex-col w-max'>
              <div className='flex items-center'>
                <span className='md-lg:text-sm text-xs font-normal md-lg:font-medium'>Deliver to</span>
                <IoIosArrowDown className='scale-25 block md-lg:hidden mx-1' />
              </div>
              <span className='text-[0.7rem]'>{`${subcity},${city}`}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center text-3xl'>
          <FaSearch className='fill-red-600 scale-75' />
          <div className='h-12 w-[0.05rem] bg-red-500 mx-3'></div>
          <CgProfile className='text-red-600' />
          <div className='h-12 hidden md-lg:block w-[0.09rem] bg-red-500 mx-3'></div>
          <div onClick={() => disp(setcartOpen(true))} className='flex cursor-pointer'>
            <div className='relative hidden md-lg:block'><MdShoppingCart className='fill-red-600' /><span className='absolute text-sm leading-6 -translate-y-4 translate-x-2 bg-white rounded-full px-2 font-semibold border-black border-[1px] top-0 right-0'>{total.items}</span></div>
            <IoIosArrowDown className='scale-50 hidden md-lg:block text-red-600' />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar