import React from 'react'
import './Slider.css'
import Card from './Card/Card'

const Slider = () => {
  return (
    <>
        <div className="slider">
            <div className="slider-wrapper">
                <div className="slider-item">
                    <Card />
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider