import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setcartOpen } from '../../features/States/StatesSlice';



const Navbar = ({ location }) => {
  const [total, settotal] = useState(0);
  const [addWindow, setaddWindow] = useState(false);
  const cart = useSelector(state => state.cart)
  const nav = useNavigate();
  const disp = useDispatch();

  useEffect(() => {
    let tot = 0;
    Object.keys(cart).map((index) => {
      tot = tot + cart[index][0][3];
    })
    settotal(tot)
  }, [cart])

  return (<>
    {addWindow && <>
      <div className='absolute inset-0 bg-black bg-opacity-25 z-30 backdrop-blur-md'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='bg-white w-[30rem] py-4 px-5 rounded-xl'>
            <div className='flex justify-between relative'>
              <div className='flex justify-center w-full'><img className='w-28 h-28 rounded-md' src="/assets/img/1649325481.webp" alt="Cheeziious Logo" /></div>
              <span onClick={()=> setaddWindow(false)} className='p-2 bg-gray-500 text-white rounded-md h-max cursor-pointer absolute right-0 top-0'><ImCross /></span>
            </div>
            <div className='mx-2 flex flex-col items-center'>
              <h3 className='my-2 font-semibold'>Select your Order Type</h3>
              <span className='py-2 px-4 font-semibold bg-yellow-400 rounded-full'>Delivery</span>
            </div>
            <div className='mx-2 flex flex-col items-center'>
              <h3 className='my-2 font-semibold'>Select your location</h3>
              <span className='py-2 px-4 text-xs bg-gray-200 hover:bg-red-600 hover:text-white cursor-pointer rounded-full flex items-center'><FaLocationCrosshairs className='mr-1 text-lg'/>Use current location</span>
            </div>
            <input type="text" placeholder='Enter your complete street address' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none my-1 px-4' />
            <input type="text" placeholder='Enter your complete street address' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none my-1 px-4' />
            <button onClick={() => setaddWindow(false)} className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>Select</button>
          </div>

        </div>
      </div>
    </>
    }
    <div className='h-20 bg-yellow-400 flex items-center shadow-md w-[100vw] fixed left-0 top-0 z-20'>
      <div className='mx-4 md-lg:mx-14 xl:mx-28 flex w-full'>
        <div className='w-full flex md-lg:flex-row-reverse'>
          <div className='flex justify-center w-max md-lg:w-full relative'>
            <img src="/assets/img/1649325481.webp" alt="Cheezious Logo"
              className='h-20 w-20' />
            <div onClick={() => nav("/")} className='absolute inset-0 cursor-pointer'></div>
          </div>
          <div onClick={()=> setaddWindow(true)} className='flex items-center cursor-pointer'>
            <FaLocationDot className='text-3xl mx-1 fill-red-600' />
            <div className='flex flex-col w-max'>
              <div className='flex items-center'>
                <span className='md-lg:text-sm text-xs font-normal md-lg:font-medium'>Deliver to</span>
                <IoIosArrowDown className='scale-25 block md-lg:hidden mx-1' />
              </div>
              <span className='text-[0.7rem]'>{location}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center text-3xl'>
          <FaSearch className='fill-red-600 scale-75' />
          <div className='h-12 w-[0.05rem] bg-red-500 mx-3'></div>
          <CgProfile className='text-red-600' />
          <div className='h-12 hidden md-lg:block w-[0.09rem] bg-red-500 mx-3'></div>
          <div onClick={() => disp(setcartOpen(true))} className='flex cursor-pointer'>
            <div className='relative hidden md-lg:block'><MdShoppingCart className='fill-red-600' /><span className='absolute text-sm leading-6 -translate-y-4 translate-x-2 bg-white rounded-full px-2 font-semibold border-black border-[1px] top-0 right-0'>{total}</span></div>
            <IoIosArrowDown className='scale-50 hidden md-lg:block text-red-600' />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar