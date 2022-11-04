import React, { useReducer } from 'react'
import { Helmet } from 'react-helmet-async'
import '../index.css'



const CounterUseReducer = () => {
    const initialState = { count: 8, value: 0 }

const  reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
        {
            return {...initialState, count: state.count + 1}
        }break;
        case 'decrement':
        {
            return {...initialState, count: state.count - 1}
        }break;
        case 'reset':
        {
            return {...initialState, count: action.payload}
        }break;
        case 'setValue':
        {
            return {...initialState, count: action.payload}
        }break;
        case 'count':
            {
                return{...initialState, value: action.payload}
            }

        default:
            return initialState
    }
}

const [state, dispatch] = useReducer(reducer, initialState)


    
  return (
    <>
      <Helmet>
        <title>Counter UseReducer</title>
        <meta name="description" content="This is a Counter made with a useReducer" />
      </Helmet>
      <div className='counter-container'>
        <h1 className='count-header'>useReducer Counter</h1>
        <div className='set-container'>
          <h2 className='count'>{state.count}</h2>
          <input className='set-input' type="number" value={state.value} onChange={(e) => dispatch({type: 'count', payload: Number(e.target.value)})} />
          <button className='set-btn' onClick = {() => dispatch({type: 'setValue', payload: state.value})}>Set count</button>
        </div>
        <div className="btn-container">
          <button className='increment-btn' onClick={() => dispatch({type: 'increment'})}>Increment</button>
          <button className='decrement-btn' disabled={state.count <= 0} onClick = {() => dispatch({type: 'decrement'})}>Decrement</button>
          <button className='reset-btn' onClick = {() => dispatch({type: 'reset', payload: 8})}>Reset</button>
        </div>
          
      </div>
    </>
  )
}

export default CounterUseReducer
