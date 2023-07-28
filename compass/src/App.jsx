import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Test
      </h1>
      <button className='btn btn-dark'>
        aaa
      </button>
    </>
  )
}

export default App
