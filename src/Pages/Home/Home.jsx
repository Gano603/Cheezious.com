import React, {useState } from 'react'
import CardList from './components/CardList'
import Description from './components/Description'
import Hero from './components/Hero'
import Cart from './components/Cart'

const Home = ({cart , setcart , cartOpen , setcartOpen}) => {

  const [scrollmagic, setscrollmagic] = useState(false)

  return (
    <>
      <Hero scrollmagic={scrollmagic} />
      <CardList cart={cart} setcart={setcart}/>
      <Description />

      <Cart cartOpen={cartOpen} setcartOpen={setcartOpen}/>
      {/*HERO FIX
        responsive cart
        checked issue
         FAVOURITE BUTTON LEFT*/}
    </>

  )
}

export default Home