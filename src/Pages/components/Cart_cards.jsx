import React from 'react'
import { GoTrash } from "react-icons/go";


const Cart_cards = ({ cart, index, setcart}) => {    

    const delete_func = () => {
        let updat = {}
            Object.keys(cart).map((indexx)=> {
                if(indexx !== index){
                    updat[indexx] = cart[indexx]
                }
            })
            setcart(updat)
    }

    const handleSubtract = () => {

        if (cart[index][3] == 1) {
            delete_func()
        }
        else {
            setcart({ ...cart, [index]: [cart[index][0], cart[index][1], cart[index][2], cart[index][3] -= 1] })
        }
    }

        return (
            <>
            <div className='flex mx-4 py-2 my-4 border-t-2 border-gray-300'>
                <img src={cart[index][0]} className='h-20 w-20 rounded-lg' />
                <div className='px-4'>
                    <h2 className='font-bold'>{index}</h2>
                    <h5 className='text-[0.95rem] text-gray-500'>{cart[index][1]}</h5>
                    <p className='text-right font-semibold text-md my-2 text-gray-600'>Rs. {(parseInt(cart[index][2])*cart[index][3])}.00</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <button onClick={handleSubtract} className='bg-red-600 rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>-</button>
                            <span className='border-2  rounded-md py-1 px-2 text-sm'>{cart[index][3]}</span>
                            <button onClick={() => setcart({ ...cart, [index]: [cart[index][0], cart[index][1], cart[index][2], cart[index][3] += 1] })} className='bg-red-600 rounded-full px-2 w-6 h-6 mx-2 text-sm text-white'>+</button>
                        </div>
                        <GoTrash onClick={delete_func} className='text-xl cursor-pointer' />
                    </div>
                </div>
            </div>
            </>
        )
    }

    export default Cart_cards