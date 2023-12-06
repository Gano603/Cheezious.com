import { useEffect, useRef, useState } from 'react'
import Button from './Button'


const Hero = () => {

    const [scrollmagic, setscrollmagic] = useState(false)
    const [selected, setselected] = useState(0)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 40) {
                setscrollmagic(true)
            } else {
                setscrollmagic(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll
            )
        }
    }, [scrollmagic])

    const buttons = ["I'm Back!", "Starters", "Somewhat Local", "Somewhat Sooper", "Cheezy Treats",
        "Sandwiches & Platters", "Pizza Deals", "Special Pizza", "Somewhat Amazing", "Pastas", "Burgerz", "Side Orders",
        "Addons"]

    return (
        <>
            <div className={`w-[100vw] ${scrollmagic ? "h-20 -mt-[8rem] border-b-2 border-gray-400" : "h-40"} flex justify-between fixed`}>
                <div className='bg-white w-[10%] h-full'></div>
                <div className={`flex w-full py-2 z-10 overflow-x-auto overscroll-contain scrollable-content bg-white ${scrollmagic ? "" : ""}`}>
                    <div className={` ${scrollmagic ? "flex" : "flex flex-wrap justify-center"}`}>
                        {buttons.map((index, iter) => {
                            return <Button key={iter} title={index} setselected={setselected} iter={iter} isSelected={selected === iter} />
                        })}
                    </div>
                </div>
                <div className='bg-white w-[10%] h-full'></div>
            </div>
            <hr className={`prominent-hr mt-20 transition duration-300 ${scrollmagic ? "hidden" : ""}`} />
        </>

    )
}

export default Hero