import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


const Description_tabs = ({ description_title, description_data, selected, cond, setselected, iter }) => {
  return (
    <>
      <div onClick={() => selected.includes(iter) ? setselected(selected.filter((index) => index !== iter)) : setselected([...selected, iter])} className={`${cond ? "h-16 mt-4" : "h-12"} transition-all duration-300 py-2 px-4 w-full bg-black bg-opacity-60 border-b-[1px] first:mt-0 last:border-none border-opacity-30 flex items-center shadow-lg border-black justify-between cursor-pointer`}>
        <span className='text-white font-bold text-md'>{description_title}</span>
        <IoIosArrowDown className={`scale-150 text-white mr-2 sm:mr-6 transition-all duration-300 ${cond? "rotate-180":""}`}/>
      </div>
        <p
          className={`bg-black bg-opacity-90 text-white text-sm sm:text-base py-7 pl-4 leading-10 mb-4 transition-all duration-300 ${cond ? '' : 'scale-y-0 hidden'}`}
          dangerouslySetInnerHTML={{ __html: description_data }}
        />

    </>
  )
}

export default Description_tabs