import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = ({ location , cartOpen , setcartOpen , cart}) => {
  const [total,settotal] = useState(0);

  useEffect(()=>{
    let tot=0;
    Object.keys(cart).map((index)=>{
      tot = tot + cart[index][3];
    })
    settotal(tot)
  },[cart])

  return (
    <div className='h-20 bg-yellow-400 flex items-center shadow-md w-[100vw] fixed left-0 top-0 z-20'>
      <div className='mx-4 md-lg:mx-14 xl:mx-28 flex w-full'>
        <div className='w-full flex md-lg:flex-row-reverse'>
        <div className='flex justify-center w-max md-lg:w-full'>
          <img src="/assets/img/1649325481.webp" alt="Cheezious Logo" 
          className='h-20 w-20' />
        </div>
        <div className='flex items-center'>
          <FaLocationDot className='text-3xl mx-1 fill-red-600' />
          <div className='flex flex-col w-max'>
            <div className='flex items-center'>
            <span className='md-lg:text-sm text-xs font-normal md-lg:font-medium'>Deliver to</span>
            <IoIosArrowDown className='scale-25 block md-lg:hidden mx-1'/>
            </div>
            <span className='text-[0.7rem]'>{location}</span>
          </div>
        </div>
        </div>
        <div className='flex items-center text-3xl'>
          <FaSearch className='fill-red-600 scale-75'/>
          <div className='h-12 w-[0.05rem] bg-red-500 mx-3'></div>
          <CgProfile className='text-red-600' />
          <div className='h-12 hidden md-lg:block w-[0.09rem] bg-red-500 mx-3'></div>
          <div onClick={()=> setcartOpen(!cartOpen)} className='flex cursor-pointer'>
          <div className='relative hidden md-lg:block'><MdShoppingCart className='fill-red-600' /><span className='absolute text-sm leading-6 -translate-y-4 translate-x-2 bg-white rounded-full px-2 font-semibold border-black border-[1px] top-0 right-0'>{total}</span></div>
          <IoIosArrowDown className='scale-50 hidden md-lg:block text-red-600'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar