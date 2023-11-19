import React from 'react'

const Description_tabs = ({ description_title, description_data, selected, cond, setselected, iter }) => {
  return (
    <>
      <div onClick={() => selected.includes(iter) ? setselected(selected.filter((index) => index !== iter)) : setselected([...selected, iter])} className={`${cond ? "h-16 mt-4" : "h-12"} transition-all duration-300 py-2 px-4 w-full bg-black bg-opacity-60 border-b-[1px] first:mt-0 last:border-none border-opacity-30 flex items-center shadow-lg border-black relative cursor-pointer`}>
        <span className='text-white font-bold text-md'>{description_title}</span>
        <span className='absolute right-0 mr-4 text-2xl text-white -rotate-90'>&lt;</span>
      </div>
      {cond && (
        <p
          className={`bg-black bg-opacity-90 text-white py-7 px-4 leading-10 mb-4 overflow-hidden ${cond ? '' : ''}`}
          dangerouslySetInnerHTML={{ __html: description_data }}
        />
      )}

    </>
  )
}

export default Description_tabs