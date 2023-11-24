import React from 'react'
import First_tile from './components/First_tile';
import Second_Tile from './components/Second_Tile';
import { useParams } from 'react-router-dom';



const Product = () => {
  const { title, title_head } = useParams();
  document.title = `${title} - Cheezious` || 'Cheezious'

  return (
    <div className='text-black mt-20'>
      <First_tile title={title} title_head={title_head}/>
      <div className='mx-[20vw] grid grid-cols-12 items-center'>
        <hr className='bg-gray-400 h-[2px] col-span-5' />
        <span className='col-span-2 mx-3 text-xl text-center font-bold'>More in {title_head}</span>
        <hr className='bg-gray-400 h-[2px] col-span-5' />
      </div>
      <Second_Tile title={title} title_head={title_head} />
    </div>
  )
}

export default Product