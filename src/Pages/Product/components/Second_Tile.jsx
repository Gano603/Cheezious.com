import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const Second_Tile = ({ title, title_head }) => {
    const card_details = useSelector(state => state.cardDetails[title_head]).filter((index) => (index[1] !== title))
    return (
        <div className='mt-12 bg-white rounded-lg py-3 px-2 w-full'>
            <div className='flex justify-center'>
                <div className='w-11/12 lg:w-10/12 xl:w-9/12 overflow-x-scroll'>
                    <div className='flex'>
                    {card_details.map((index, iter) => (
                        <div className='mx-1' key={iter}>
                            <ProductCard title={title_head} imgSrc={index[0]} card_description={index[2]} card_title={index[1]} price={index[3]} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second_Tile