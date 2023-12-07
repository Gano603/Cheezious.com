import React from 'react'

const Card_comp = ({ imgSrc, price, card_title, quant }) => {
    return (
        <div className='border-[2px] border-slate-100 flex flex-col items-center p-2 rounded-xl hover:border-yellow-400 cursor-pointer'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <img className='2xl:w-[10vw] w-72 h-56 2xl:h-[8vw] rounded-xl' src={imgSrc} />
                    <div >
                        <h6 className='text-lg font-semibold mx-4 my-2'>{card_title}</h6>
                        <h6 className='mx-4 my-2'>Quantity:<span className='py-1 px-2 mx-4 cursor-text border-2 rounded-md'>{quant}</span></h6>
                    </div>
                </div>
                <hr className={`prominent-hr w-full my-3`} />
                <span className='text-md mt-4 text-red-600 font-semibold'> Rs. {price}</span>
            </div>
        </div>
    )
}

export default Card_comp