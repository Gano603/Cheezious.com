import React from 'react'
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuantity, addToCart } from '../../../features/cart/cartSlice';


const Card = ({ card_title, title, card_description, price, imgSrc , iter}) => {
    const cart = useSelector(state => state.cart)
    const disp = useDispatch();
    const nav = useNavigate();

    const handleCart = () => {

        if (cart.hasOwnProperty(card_title)) {
            disp(addQuantity(({ [card_title]: [imgSrc, card_description, price, cart[card_title][iter][3]+1] })))
        }
        else {
            disp(addToCart(({ [card_title]: [imgSrc, card_description, price, 1] })))
        }
    }


    return (
        <div className='border-[2px] border-slate-100 flex flex-col items-center p-2 rounded-xl hover:border-yellow-400 cursor-pointer'>
            <div onClick={() => nav(`/product/${card_title}/${title}`)} className='flex flex-col items-center'>
                <div className='relative -z-20'>
                    <img className='2xl:w-[16vw] w-72 h-56 2xl:h-[13vw] rounded-xl' src={imgSrc} />
                    <div className='absolute top-2 right-2 bg-gray-300 text-3xl rounded-3xl p-1'><CiHeart /></div>
                </div>
                <h6 className='text-lg mt-2 font-semibold'>{card_title}</h6>
                <div className='w-full'>
                    <p className='text-xs line-clamp-2 mt-1 text-center px-2 h-8'>{card_description}</p>
                </div>
                <hr className={`prominent-hr w-full my-3`} />
                <span className='text-md mt-4 text-red-600 font-semibold'>Rs. {price}</span>
            </div>
            <button onClick={handleCart} className={`px-4 py-2 bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`} title='Add to Cart'>Add to Cart</button>
        </div>
    )
}

export default Card