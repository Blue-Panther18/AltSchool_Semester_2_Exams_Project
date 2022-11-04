import React from 'react'
import { Helmet } from 'react-helmet-async'
import useCounter from '../Hooks/useCounter'
import "../index.css"

const Counter = () => {
    const [count, increment, decrement, reset, setValue, tracker, setTracker] = useCounter(8)
    
  return (
    <>
      <Helmet>
        <title>Counter useCounter</title>
        <meta name="description" content="This is a useCounter custom hook counter" />
      </Helmet>
      <div className='counter-container'>
        <h1 className='count-header'>Counter</h1>
        <div className='set-container'>
          <h2 className='count'>{count}</h2>
          <input className='set-input' type="number" value={tracker} onChange={(e) => setTracker(Number(e.target.value))}/>
          <button className='set-btn' onClick={() => setValue(tracker)}>Set count</button>
          </div>
        <div className="btn-container">
          <button className='increment-btn' onClick={increment}>Increment</button>
          <button className='decrement-btn' disabled={count <= 0} onClick={decrement}>Decrement</button>
          <button className='reset-btn' onClick={reset}>Reset</button>
          </div>
          
      </div>
    </>
          )
}

export default Counter
