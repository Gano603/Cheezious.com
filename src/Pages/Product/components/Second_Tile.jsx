import React from 'react'
import Card from '../../Home/components/Card'

const Second_Tile = () => {
    return (
        <div className='mt-[6vh] bg-white mx-[20vw] rounded-lg py-3 px-2'>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 sm:col-span-6 xl:col-span-4 md-lg:mx-6 2xl:mx-4 2xl:col-span-3'>
                    <Card imgSrc={"/assets/img/starter/start2.webp"} card_description={"Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese"} card_title={"Fettucine Alfredo Pasta"} price={"990.00"}/>
                </div>
            </div>
        </div>
    )
}

export default Second_Tile