import React from 'react'
import "../index.css"
import { Routes, Route } from 'react-router-dom'
import Counter from './Counter'
import CounterUseReducer from './CounterUseReducer'
import ErrorPages from './ErrorBoundary'
import ErrorPage from './ErrorPage'
import Layout from './Layout'



const Router = () => {
  return (
    <section className='main-container'>
    <Layout />
      <Routes>
        <Route end path="/" element={<CounterUseReducer />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error-boundary" element={<ErrorPages />} />
      </Routes>
    </section>
  )
}

export default Router
