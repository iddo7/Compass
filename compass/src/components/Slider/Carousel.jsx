import React from 'react'
import { useRef, useEffect, useState } from "react"  
import { motion } from "framer-motion"
import Card from './Card/Card'
import './Carousel.css'

const Carousel = () => {

  const [innerCarouselWidth, setInnerCarouselWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setInnerCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    console.log(carousel)
  }, [])

  return (
    <>
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -innerCarouselWidth }} className="inner-carousel">
          <motion.div className='item'>
            <Card />
          </motion.div>
          <motion.div className='item'>
            <Card />
          </motion.div>
          <motion.div className='item'>
            <Card />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Carousel