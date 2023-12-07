import Cards from './components/Cards'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';


const Dashboard = () => {
  const [dat, setdat] = useState([]);
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/get")
      .then(({ data: { order } }) => setdat(order))
    // .then(() => nav('/'))
  }, [])
  return (
    <div className='mt-[5rem] flex justify-center items-center'>
      <div className='w-[80%] h-[80%] bg-white rounded-xl p-4'>
        <h2 className='text-3xl font-semibold'>Orders</h2>
        {dat.map((index,it) => {
            return <Cards key={it} data={index} />
        })}
      </div>
    </div>
  )
}

export default Dashboard