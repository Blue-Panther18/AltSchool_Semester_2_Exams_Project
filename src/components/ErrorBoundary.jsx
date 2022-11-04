import React, { useState } from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import { Helmet } from 'react-helmet-async';
import '../index.css'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Bomb({ value }) {
  if (value > 10) {
    throw new Error('💥 CABOOM 💥, number should be less than 10');
  }
  return '';
}


const ErrorPages = () => {
  const [count, setCount] = useState(4)
  const [value, setValue] = useState(0)

  return (
    <div>
      <Helmet>
        <title>Error Pages</title>
        <meta name="description" content="This is a Error Pages" />
      </Helmet>
      <h1 className='num-header'>Numbering</h1>
      <h3 className='num-des'>Number must be less 10</h3>
      <h1 className='num'>{count}</h1>
      <input className='setNum-input' value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <button className='setNum-btn' onClick={() => setCount(value)}>Set Number</button>
      <ErrorBoundary FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
        setValue(0)
      
      }}
      resetKeys={[value]}
      >
        <Bomb value={value} />
      </ErrorBoundary>
    </div>
  )
}

export default ErrorPages
