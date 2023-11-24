import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const Second_Tile = ({title , title_head}) => {
    const card_details = useSelector(state => state.cardDetails[title_head]).filter((index)=>( index[1]!==title))
    return (
        <div className='mt-[6vh] bg-white mx-[20vw] rounded-lg py-3 px-2'>
                <div className='flex overflow-auto z-10'>
                    {card_details.map((index,iter) => (
                        <div className='mx-4' key={iter}>
                        <ProductCard title = { title_head } imgSrc = { index[0]} card_description = { index[2]} card_title = { index[1]} price = { index[3]} />
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Second_Tile