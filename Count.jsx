import React from 'react'
import { useState } from 'react'
import "./global.css"

const App = () => {

  let [count , setCount] = useState(0)
  let increment = ()=>{
    setCount(count+1)
  }
  let decrement = ()=>{
    setCount(count-1)
  }  

  let reset = ()=>{
    setCount(0)
  }

  return (
    <div className='holder'>
      <h1>{count}</h1>
            <div className='btn-block'>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMNT</button>
             <button onClick={reset}>RESET</button>
            </div>
    </div>
  )
}

export default App










