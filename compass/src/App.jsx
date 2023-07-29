import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
