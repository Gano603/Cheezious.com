import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { addQuantity, addToCart, addcompQuantity } from '../../../features/cart/cartSlice';

const First_tile = ({title , title_head}) => {

    const [quant, setquant] = useState(1);
    const nav = useNavigate();

    const disp = useDispatch();
    const cart = useSelector(state => state.cart)

    const card_list = useSelector(state => state.cardDetails[title_head])
    let save;
    card_list.map((index, i) => {
        if (index.includes(title)) {
            save = i;
        }
    })

    const handleCart = () => {

        if (cart.hasOwnProperty(title)) {
            disp(addcompQuantity(({ [title]: [card_list[save][0], card_list[save][2], card_list[save][3], quant] })))
        }
        else {
            disp(addToCart(({ [title]: [card_list[save][0], card_list[save][2], card_list[save][3], quant] })))
        }
    }

    return (
        <div className='border-[2px] border-slate-100 bg-white mt-[7vh] mb-[6vh] px-6 pb-8 flex flex-col p-2 rounded-2xl mx-6'>
            <div className='flex items-center mb-6 mt-1'>
                <span onClick={() => nav('/')} className='text-[0.75rem] text-gray-400 hover:underline cursor-pointer'>Home</span>
                <IoIosArrowDown className='-rotate-90 mx-2 text-[0.8rem] text-gray-400' />
                <span className='text-[0.75rem] text-yellow-400'>{title}</span>
            </div>
            <div className='flex md-lg:flex-row flex-col'>
                <img className='w-full h-[90vw] md-lg:w-96 md-lg:h-96 rounded-xl' src={card_list[save][0]} />
                <div className='md-lg:mx-7 flex flex-col justify-between w-full'>
                    <div className='my-8'>
                        <div className='flex justify-between items-center'>
                            <h6 className='text-4xl mt-2 font-extrabold'>{title}</h6>
                            <div className='bg-gray-300 text-3xl h-max w-max rounded-3xl p-2'><CiHeart className='text-semibold text-[1.4rem]' /></div>
                        </div>
                        <div className='w-full'>
                            <p className='my-2 text-gray-400'>{card_list[save][2]}</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='flex justify-between sm:flex-start items-center my-4 sm:my-0'>
                            <button onClick={() => quant == 1 ? "" : setquant(quant - 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-16 sm:w-9 h-9 mx-2 text-lg transition-colors duration-300 text-white hover:bg-yellow-500 hover:text-black'>-</button>
                            <span className='border-2 rounded-3xl w-32 sm:w-16 text-center py-2 px-4 text-sm'>{quant}</span>
                            <button onClick={() => setquant(quant + 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-16 sm:w-9 h-9 mx-2 text-lg text-white transition-colors duration-300 hover:bg-yellow-500 hover:text-black'>+</button>
                        </div>
                        <button onClick={handleCart} className={`px-4 py-[0.6rem] bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`} title='Add to Cart'><span className='text-md mt-6 font-semibold mr-20 sm:mr-36 md:mr-48 md-lg:mr-36'>Rs. {card_list[save][3]}</span> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First_tile