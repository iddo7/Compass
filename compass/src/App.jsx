import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />

          <Slider />
          
      <Footer />
    </>
  )
}

export default App
