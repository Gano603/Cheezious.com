import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";


const EmptyCarrt = ({cond}) => {
    return (
        <>
            {cond && <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
                <PiForkKnifeFill className='text-gray-500 h-40 w-40' />
                <p className='text-gray-500 text-xl'>Your Cart is Empty</p>
            </div>}
        </>
    )
}

export default EmptyCarrt