import React from 'react'
import CardList from './components/CardList'
import Description from './components/Description'
import Hero from './components/Hero'
import { useDispatch } from 'react-redux'
import { resetStates } from '../../features/States/StatesSlice'

const Home = () => {
  const disp = useDispatch();

  disp(resetStates());
  return (
    <>
      <Hero />
      <CardList />
      <Description />      
      {/*checked issue
         FAVOURITE BUTTON LEFT*/}
    </>

  )
}

export default Home