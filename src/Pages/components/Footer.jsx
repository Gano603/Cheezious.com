import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='mx-[5vw] px-16 py-12 w-[90vw] border-[1px] mt-32 rounded-3xl border-gray-200 flex bg-white'>
            <div><img className='h-[11.2rem] w-[12rem] rounded-sm' src="/assets/img/1649325481.webp" /></div>
            <div className='flex w-full'>
                <div className='w-3/5 px-6'>
                    <h6 className='font-semibold'>Cheezious</h6>
                    <p className='flex items-center my-2'><FaPhoneAlt  className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>123456789</span></p>
                    <p className='flex items-center my-2'><IoMail className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>khawar603@gmail.com</span></p>
                    <p className='flex items-center my-2'><FaLocationDot  className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>Cheezious- Johar Town Phase 2, J3 Block Phase 2 Johar Town, Cheezious- Johar Town Phase 2, Lahore</span></p>
                </div>
                <div className='w-2/5'>
                    <h6 className='font-semibold'>Our Timings</h6>
                    <div className='flex justify-between my-2'>
                        <span className='text-sm'>Monday - Sunday</span>
                        <span className='text-sm'>11:00 AM - 03:00 AM</span>
                    </div>
                    <h6 className='mt-4 font-semibold'>Follow Us:</h6>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer