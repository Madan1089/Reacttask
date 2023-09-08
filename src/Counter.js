import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter]= useState(0);

    const handlecounter=(e)=>{
        setCounter(counter+1)
    }
  return (
    <>
    <h1>Counter: {counter}</h1>
    <button type='submit' onClick={handlecounter}>Increament</button>

    </>
  )
}

export default Counter
