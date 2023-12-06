import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';


const CardList = () => {

    const card_list = useSelector(state => state.cardDetails)
    return (
        Object.keys(card_list).map((title, iter1) => {
            const data = card_list[title];
            return (
                <div key={iter1} className={`h-max md-lg:w-[90vw] w-[96vw] mx-[2vw] md-lg:mx-[5vw]`}>
                    <h2 className='text-black text-2xl my-1 mt-6 mx-6 font-bold'>{title}</h2>
                    <div className='grid grid-cols-12'>
                        {data.map((index2, iter) => (
                            <div key={iter} className='my-6 mx-0 col-span-6 sm:col-span-4 xl:col-span-3 md-lg:mx-6 2xl:mx-4 2xl:col-span-2'>
                                <Card title={title} iter={iter} card_title={index2[1]} card_description={index2[2]} price={index2[3]} imgSrc={index2[0]} cond={index2[4]!==undefined} />
                            </div>
                        ))}
                    </div>
                    <hr className={`prominent-hr my-4`} />
                </div>
            )
        })
    );
}

export default CardList