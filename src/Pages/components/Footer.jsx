import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='lg:mx-[5vw] px-4 md-lg:px-8 lg:px-16 py-12 mx-[2vw] w-[96vw] lg:w-[90vw] border-[1px] mt-32 rounded-3xl border-gray-200 bg-white'>
            <div className='flex md-lg:flex-row flex-col items-center '>
            <div><img className='my-7 md:m-0 h-[11.2rem] w-[12rem] rounded-sm' src="/assets/img/1649325481.webp" /></div>
            <div className='flex w-full md-lg:flex-row flex-col justify-start'>
                <div className='w-full md-lg:w-3/5 px-0 md-lg:px-6'>
                    <h6 className='font-semibold'>Cheezious</h6>
                    <p className='flex items-center my-2'><FaPhoneAlt  className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>123456789</span></p>
                    <p className='flex items-center my-2'><IoMail className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>khawar603@gmail.com</span></p>
                    <p className='flex items-center my-2'><FaLocationDot  className='fill-[rgb(210,0,0)]'/> <span className='ml-2 text-[0.95rem]'>Cheezious- Johar Town Phase 2, J3 Block Phase 2 Johar Town, Cheezious- Johar Town Phase 2, Lahore</span></p>
                </div>
                <div className='w-full my-4 md-lg:w-2/5'>
                    <h6 className='font-semibold'>Our Timings</h6>
                    <div className='flex justify-between my-2 w-full'>
                        <span className='text-sm'>Monday - Sunday</span>
                        <span className='text-sm'>11:00 AM - 03:00 AM</span>
                    </div>
                    <h6 className='mt-4 font-semibold'>Follow Us:</h6>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <hr className='h-[3px] mt-5 w-full bg-black'/>
        <p className='text-center text-sm text-gray-900 my-2'>&copy; Powered By <a href="https://github.com/Gano603" className='underline cursor-pointer'>Gano603</a></p>
        </div>
    )
}

export default Footer