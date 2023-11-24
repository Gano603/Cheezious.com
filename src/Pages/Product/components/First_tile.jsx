import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { addQuantity, addToCart } from '../../../features/cart/cartSlice';

const First_tile = ({title , title_head}) => {

    const [quant, setquant] = useState(1);
    const nav = useNavigate();

    const disp = useDispatch();
    const cart = useSelector(state => state.cart)
    console.log(cart)

    const card_list = useSelector(state => state.cardDetails[title_head])
    let save;
    card_list.map((index, i) => {
        if (index.includes(title)) {
            save = i;
        }
    })

    const handleCart = () => {

        if (cart.hasOwnProperty(title)) {
            disp(addQuantity(({ [title]: [card_list[save][0], card_list[save][2], card_list[save][3], cart[card_title][iter][4]+quant] })))
        }
        else {
            disp(addToCart(({ [title]: [card_list[save][0], card_list[save][2], card_list[save][3], quant] })))
        }
    }

    return (
        <div className='border-[2px] border-slate-100 bg-white mt-[12vh] mb-[6vh] mx-[20vw] px-6 pb-8 flex flex-col p-2 rounded-2xl'>
            <div className='flex items-center mb-6 mt-1'>
                <span onClick={() => nav('/')} className='text-[0.75rem] text-gray-400 hover:underline cursor-pointer'>Home</span>
                <IoIosArrowDown className='-rotate-90 mx-2 text-[0.8rem] text-gray-400' />
                <span className='text-[0.75rem] text-yellow-400'>{title}</span>
            </div>
            <div className='flex'>
                <img className='2xl:w-[23vw] 2xl:h-[21vw] w-72 h-56 rounded-xl' src={card_list[save][0]} />
                <div className='mx-7 flex flex-col justify-between w-full'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h6 className='text-4xl mt-2 font-extrabold'>{title}</h6>
                            <div className='bg-gray-300 text-3xl h-max w-max rounded-3xl p-2'><CiHeart className='text-semibold text-[1.4rem]' /></div>
                        </div>
                        <div className='w-full'>
                            <p className='my-2 text-gray-400'>{card_list[save][2]}</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <button onClick={() => quant == 1 ? "" : setquant(quant - 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-9 h-9 mx-2 text-lg transition-colors duration-300 text-white hover:bg-yellow-500 hover:text-black'>-</button>
                            <span className='border-2 rounded-3xl w-16 text-center py-2 px-4 text-sm'>{quant}</span>
                            <button onClick={() => setquant(quant + 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-9 h-9 mx-2 text-lg text-white transition-colors duration-300 hover:bg-yellow-500 hover:text-black'>+</button>
                        </div>
                        <button onClick={handleCart} className={`px-4 py-[0.6rem] bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`} title='Add to Cart'><span className='text-md mt-6 font-semibold mr-36'>Rs. {card_list[save][3]}</span> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First_tile