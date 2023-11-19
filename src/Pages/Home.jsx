import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'
import Hero from 'src/components/hero'
import Description from './components/Description'

const Home = () => {

  const [scrollmagic, setscrollmagic] = useState(false)
  const [right, setright] = useState(false)
  useEffect(() => {

    const handleScroll = () => {

      const scroll_threshold = 10;
      const scroll = window.scrollY;


      if (scroll > scroll_threshold) {
        setscrollmagic(true)
      }
      else {
        setscrollmagic(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Hero scrollmagic={scrollmagic} />
      <hr className={`prominent-hr transition duration-300 ${scrollmagic ? "hidden" : ""}`} />
      <CardList />
      <Description />
    </>

  )
}

export default Home