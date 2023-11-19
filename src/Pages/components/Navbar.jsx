import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";



const Navbar = ({ location }) => {
  return (
    <div className='h-20 bg-yellow-400 flex items-center shadow-lg w-full fixed left-0 top-0 z-20'>
      <div className='mx-4 md-lg:mx-28 flex w-full'>
        <div className='w-full flex md-lg:flex-row-reverse'>
        <div className='flex justify-center w-max md-lg:w-full'>
          <img src="/assets/img/1649325481.webp" alt="Cheezious Logo" 
          className='h-20 w-20' />
        </div>
        <div className='flex items-center'>
          <FaLocationDot className='text-3xl mx-1 fill-red-600' />
          <div className='flex flex-col w-max'>
            <span className='text-sm font-medium'>Deliver to</span>
            <span className='text-xs'>{location}</span>
          </div>
        </div>
        </div>
        <div className='flex items-center text-3xl'>
          <CiSearch className='fill-red-600'/>
          <div className='h-12 w-[0.05rem] bg-red-500 mx-3'></div>
          <CgProfile className='text-red-600' />
          <div className='h-12 hidden md-lg:block w-[0.09rem] bg-red-500 mx-3'></div>
          <CiShoppingCart className='fill-red-600 hidden md-lg:block' />
          <span className='text-red-600 text-sm font-bold -rotate-90 mx-1'>&lt;</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar