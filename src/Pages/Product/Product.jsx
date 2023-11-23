import React from 'react'
import First_tile from './components/First_tile';
import Second_Tile from './components/Second_Tile';



const Product = () => {

  // disp(addQuantity(title))
  // disp(subQuantity(title))


  return (
    <div className='text-black mt-20'>
      <First_tile />
      <div className='mx-[20vw] grid grid-cols-12 items-center'>
        <hr className='bg-gray-400 h-[2px] col-span-5' />
        <span className='col-span-2 mx-3 text-xl text-center font-bold'>More in {"Pastas"}</span>
        <hr className='bg-gray-400 h-[2px] col-span-5' />
      </div>
      <Second_Tile />
    </div>
  )
}

export default Product