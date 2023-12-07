import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Var_tab from '../../Product/components/Var_tab'
import { setnewWindow } from '../../../features/States/StatesSlice';
import { addToCart, addcompQuantity } from '../../../features/cart/cartSlice';

const Vars_card = () => {
    const { newWindow } = useSelector(state => state.State);

    const scrollPosition = useRef(0);

    useEffect(() => {
        const cartElement = document.getElementById("newWindow");
        if (newWindow[0]) {
            scrollPosition.current = window.scrollY;
            document.body.style.overflow = 'hidden';
            cartElement.style.position = 'fixed';
            cartElement.style.top = '0';
            cartElement.style.right = '0';
            document.body.style.top = `-${scrollPosition.current}px`;
        }
    }, [newWindow[0]]);


    const [quant, setquant] = useState(1);
    const [variate, setvariate] = useState({});
    const [total, settotal] = useState(0);
    const [req, setreq] = useState([true, true]);
    const [initial, setinitial] = useState(true);
    const nav = useNavigate();

    const disp = useDispatch();
    const cart = useSelector(state => state.cart)

    const card_list = useSelector(state => state.cardDetails[newWindow[2]])
    let save;
    if (card_list !== undefined) {
        card_list.map((index, i) => {
            if (index.includes(newWindow[1])) {
                save = i;
            }
        })
    }

    useEffect(() => {
        settotal(0)
        let tt = 0;
        Object.keys(variate).map((ind) => {
            typeof (variate[ind]) !== 'string' ? variate[ind].map((keys) => tt += parseInt(card_list[save][4][ind][keys])) : tt = + parseInt(card_list[save][4][ind][variate[ind]])
        })
        settotal(tt)
    }, [variate])

    const handleCart = () => {
        if (!req[0] && !req[1]) {
            if (cart.hasOwnProperty(newWindow[1])) {
                disp(addcompQuantity(({ [newWindow[1]]: [card_list[save][0], card_list[save][2], total, quant, variate] })))
            }
            else {
                disp(addToCart(({ [newWindow[1]]: [card_list[save][0], card_list[save][2], total, quant, variate] })))
            }
        }
        else {
            setinitial(false)
        }
    }

    const handler = () => {
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition.current);
        disp(setnewWindow([false, null, null]))
    }


    return (
        <>
            {newWindow[0] &&
                <div id='newWindow' className='h-full w-full z-30 flex justify-center items-center backdrop-blur-md bg-black bg-opacity-60'>
                    <div className='bg-white flex flex-col w-[90vw] md:w-[80vw] lg:h-[90vh] mx-6  rounded-2xl overflow-hidden'>
                        <div className='flex lg:flex-row flex-col'>
                            <div className='relative w-full h-[40vh] lg:w-7/12 lg:h-[90vh]'>
                                <img className='w-full h-full' src={card_list[save][0]} />
                                <div onClick={handler} className='lg:hidden justify-end absolute top-0 right-0 m-2 flex cursor-pointer'><ImCross className='bg-gray-300 rounded-md p-2 w-7 h-7' /></div>
                                <div className='mt-2 absolute bottom-0 left-0 px-6 py-1 bg-gradient-to-t from-black to-transparent w-full'>
                                    <h6 className='text-4xl mt-2 font-extrabold text-white'>{newWindow[1]}</h6>
                                    <p className='my-2 text-lg text-white'>{card_list[save][2]}</p>
                                </div>
                            </div>
                            <div className='mx-4 lg:mx-7 flex flex-col justify-between lg:w-5/12'>
                                <div onClick={handler} className='lg:flex justify-end mt-5 mb-3 mx-4 hidden cursor-pointer'><ImCross className='bg-gray-300 rounded-md p-2 w-7 h-7' /></div>
                                <div className='h-full'>
                                    <Var_tab initial={initial} req={req} setreq={setreq} variate={variate} setvariate={setvariate} data={card_list[save][4]} />
                                </div>
                                <div className='flex flex-col xl:flex-row justify-between my-3'>
                                    <div className='flex justify-between sm:flex-start items-center my-4 sm:my-0'>
                                        <button onClick={() => quant == 1 ? "" : setquant(quant - 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-16 sm:w-9 h-9 mx-2 text-lg transition-colors duration-300 text-white hover:bg-yellow-500 hover:text-black'>-</button>
                                        <span className='border-2 rounded-3xl w-32 sm:w-16 text-center py-2 px-4 text-sm'>{quant}</span>
                                        <button onClick={() => setquant(quant + 1)} className='bg-[rgb(210,0,0)] rounded-full px-3 w-16 sm:w-9 h-9 mx-2 text-lg text-white transition-colors duration-300 hover:bg-yellow-500 hover:text-black'>+</button>
                                    </div>
                                    <button onClick={handleCart}
                                        className={`px-4 py-[0.6rem] bg-[rgb(210,0,0)] text-white transition-colors font-semibold duration-300 rounded-3xl text-[0.95rem] hover:bg-yellow-500 hover:text-black m-1 cursor-pointer`}
                                        title='Add to Cart'>
                                        <span className='mt-6 2xl:font-semibold mr-20 sm:mr-36 md:mr-48 md-lg:mr-4 2xl:mr-[6vw]'>{card_list[save][4] !== undefined && Object.keys(variate).length === 0 ? "From" : ""} Rs. {total > 0 ? `${(total * quant).toLocaleString()}.00` : card_list[save][3]}
                                        </span>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )
}

export default Vars_card