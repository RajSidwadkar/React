import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'

export function Counter() {

    const[amount,setAmount]=React.useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br /> <br />
        <button onClick={() => dispatch({ type: 'counter/reset' })}>RESET</button>
        <br /> <br />
        <input type="text" onChange={e => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
      </div>
    </div>
  )
}