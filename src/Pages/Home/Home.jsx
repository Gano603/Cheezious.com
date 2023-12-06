import React, {useState } from 'react'
import CardList from './components/CardList'
import Description from './components/Description'
import Hero from './components/Hero'
import Cart from './components/Cart'

const Home = () => {

  return (
    <>
      <Hero />
      <CardList />
      <Description />
      <Cart />

      
      {/*HERO FIX
        responsive cart
        checked issue
         FAVOURITE BUTTON LEFT*/}
    </>

  )
}

export default Home