import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'
import Description from './components/Description'
import Hero from './components/Hero'
import Cart from './components/Cart'

const Home = ({cart , setcart , cartOpen , setcartOpen}) => {

  const [scrollmagic, setscrollmagic] = useState(false)
  const [right, setright] = useState(false)
  useEffect(() => {

    // const handleScroll = () => {

    //   const scroll_threshold = 10;
    //   const scroll = window.scrollY;


    //   if (scroll > scroll_threshold) {
    //     setscrollmagic(true)
    //   }
    //   else {
    //     setscrollmagic(false)
    //   }
    // }
    // window.addEventListener("scroll", handleScroll)
    // return () => window.removeEventListener("scroll", handleScroll)

    console.log(cart)

  }, [cart])

  return (
    <>
      <Hero scrollmagic={scrollmagic} />
      <CardList cart={cart} setcart={setcart}/>
      <Description />

      <Cart cartOpen={cartOpen} setcartOpen={setcartOpen} cart={cart} setcart={setcart}/>
      {/*HERO FIX
         FAVOURITE BUTTON LEFT*/}
    </>

  )
}

export default Home