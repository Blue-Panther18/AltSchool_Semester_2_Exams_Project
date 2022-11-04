import * as React from 'react'

const useCounter = (initialCount) => {
    const [count, setCount] = React.useState(initialCount)
    const [tracker, setTracker] = React.useState(0) 


    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(initialCount)
    }

    const setValue = (tracker) => {
        setCount(tracker)
    }


    return [count, increment, decrement, reset, setValue, tracker, setTracker]
}

export default useCounter


