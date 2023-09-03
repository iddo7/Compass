import { useState, useRef, useEffect } from "react"  
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EmblaCarousel from "./components/Carousel/EmblaCarousel"
import './components/Carousel/embla.css'

const OPTIONS = { containScroll: false }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
