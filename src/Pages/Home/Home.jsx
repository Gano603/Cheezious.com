import React from 'react'
import CardList from './components/CardList'
import Description from './components/Description'
import Hero from './components/Hero'
import Cart from './components/Cart'
import Cart_resp_header from './components/Cart_resp_header'

const Home = () => {

  return (
    <>
      <Hero />
      <CardList />
      <Description />
      <Cart />
      <Cart_resp_header />

      
      {/*checked issue
         FAVOURITE BUTTON LEFT*/}
    </>

  )
}

export default Home