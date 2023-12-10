import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuantity, addToCart, subQuantity } from '../../../features/cart/cartSlice';
import { setnewWindow } from '../../../features/States/StatesSlice';


const Card = ({ card_title, title, card_description, price, imgSrc , cond}) => {
    const cart = useSelector(state => state.cart)
    const disp = useDispatch();
    const nav = useNavigate();
    const [cartProperty, setcartProperty] = useState(false);

    const handleCart = () => {
        if (!cart.hasOwnProperty(card_title) && !cond) {
            disp(addToCart(({ [card_title]: [imgSrc, card_description, price, 1] })))
            setcartProperty(true)
        }
        else if(cond) disp(setnewWindow([true,card_title,title]))
    }

    const handleSub = () => {
        if (cart[card_title][0][3] == 1) {
            setcartProperty(false)
            disp(subQuantity(card_title))
        }
        else {
            disp(subQuantity(card_title))
        }
    }

    return (
        <div className='border-[2px] border-slate-100 flex flex-col items-center p-2 rounded-xl hover:border-yellow-400 cursor-pointer'>
            <div onClick={() => nav(`/product/${card_title}/${title}`)} className='flex flex-col items-center'>
                <div className='relative -z-20'>
                    <img className='2xl:w-[16vw] w-72 2xl:h-[13vw] rounded-xl' src={imgSrc} />
                    <div className='absolute top-2 right-2 bg-gray-300 text-3xl rounded-3xl p-1'><CiHeart /></div>
                </div>
                <h6 className=' xs:text-lg mt-2 font-semibold'>{card_title}</h6>
                <div className='w-full'>
                    <p className='text-[0.65rem] xs:text-xs line-clamp-2 mt-1 text-center px-2 h-8'>{card_description}</p>
                </div>
                <hr className={`prominent-hr w-full my-3`} />
                <span className='text-sm xs:text-md mt-4 text-red-600 font-semibold'>{cond? "From":""} Rs. {price}</span>
            </div>
            {!cartProperty && <button onClick={handleCart} className={`px-4 py-2 bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-sm xs:text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`} title='Add to Cart'>Add to Cart</button>}
            {cartProperty &&
                <div className='flex items-center bg-[rgb(210,0,0)] px-1 py-1 rounded-3xl m-1'>
                    <button onClick={handleSub} className='bg-white text-[rgb(210,0,0)] rounded-full px-3 w-8 h-8 font-semibold text-2xl'>-</button>
                    <span className='text-white py-1 px-2 mx-2 cursor-text'>{cart[card_title][0][3] || "0"}</span>
                    <button onClick={() => disp(addQuantity(card_title))} className='bg-white text-[rgb(210,0,0)] rounded-full px- w-8 h-8 font-semibold text-2xl'>+</button>
                </div>
            }
        </div>
    )
}

export default Card