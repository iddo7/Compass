import { useState, useRef, useEffect } from "react"  
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import Carousel from './components/Slider/Carousel'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <Carousel />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
