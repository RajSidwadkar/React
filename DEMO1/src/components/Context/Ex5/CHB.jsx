import React from 'react'
import useToggle from './CHA'

const CHB = () => {
    const [isToggled, toggle] = useToggle(false);
  return (
    <div>
      <p>The toggle is {isToggled ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default CHB
