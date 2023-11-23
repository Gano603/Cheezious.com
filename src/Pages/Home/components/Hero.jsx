import React, { useState } from 'react'
import Button from './Button'


const Hero = ({ scrollmagic }) => {

    const [selected, setselected] = useState(0)

    const buttons = ["I'm Back!", "Starters", "Somewhat Local", "Somewhat Sooper", "Cheezy Treats",
        "Sandwiches & Platters", "Pizza Deals", "Special Pizza", "Somewhat Amazing", "Pastas", "Burgerz", "Side Orders",
        "Addons"]

    return (
        <>
            <div className='w-[100vw]'>
                <div className={`mb-10 mt-24 top-[4.8rem] flex sticky py-2 z-10 bg-white ${scrollmagic ? "border-b-2 border-gray-400 w-full px-20" : " px-24"}`}>
                    <div className={` ${scrollmagic ? "flex" : "flex flex-wrap justify-center"}`}>
                        {buttons.map((index, iter) => {
                            return <Button key={iter} title={index} setselected={setselected} iter={iter} isSelected={selected === iter} />
                        })}
                    </div>
                </div>
            </div>
            <hr className={`prominent-hr transition duration-300 ${scrollmagic ? "hidden" : ""}`} />
        </>

    )
}

export default Hero