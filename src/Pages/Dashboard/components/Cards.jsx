import { IoIosArrowDown } from "react-icons/io";
import Card_comp from "./Card_comp";
import { useEffect, useState } from "react";




const Cards = ({ data }) => {
    let t=0;
    const [tot,settot] = useState(0);

    useEffect(()=>{
        Object.keys(data["cart"]).map((i,t)=>{
            t = t + parseInt(data["cart"][i][0][2])
            console.log(t)
        })
        settot(t)
    }),[]

    return (
        <div className='my-4 border-[2px] border-slate-100 items-center p-4 rounded-xl cursor-pointer'>
            <div className="flex">
                <div className="mx-4">
                    <h2 className='text-lg mt-2 font-semibold'>{data["name"]}</h2>
                    <h3 className='mt-2 font-semibold'>{data["phone"]}</h3>
                    <h5 className='text-sm mt-2'>{data["address"]}</h5>
                    <p className='text-xs line-clamp-2 mt-3 px-2 h-8'>{data["instructions"]? data["instructions"]:"No Instructions"}</p>
                </div>
                <div className="flex overflow-x-auto scrollable-content">
                {
                    Object.keys(data["cart"]).map((ind,it)=>(
                        <Card_comp key={it} card_title={ind} price={data["cart"][ind][0][2]} imgSrc={data["cart"][ind][0][0]} quant={data["cart"][ind][0][3]} />
                    ))
                }
                </div>
            </div>

            <div>
                <hr className={`prominent-hr w-full my-3`} />
                <div className="flex justify-between items-center">
                    <span className='text-md mt-4 text-red-600 font-semibold'>Order Total: Rs. {tot}</span>
                    <div className="flex items-center text-white hover:bg-green-500 bg-[rgb(210,0,0)] rounded-3xl hover:text-black transition-all duration-300">
                        <button className={`pl-8 pr-4 py-2 font-semibold text-[0.95rem] m-1 cursor-pointer `} title='Deliver'>Deliver</button>
                        <IoIosArrowDown className='mx-3 scale-25 -rotate-90 -translate-x-6 ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards