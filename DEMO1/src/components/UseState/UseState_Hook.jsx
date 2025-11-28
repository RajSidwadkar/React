
import { useState } from "react";
export default function UseState_Hook() {

    let [count, setCount] = useState('0');
    //Syntax: let [stateVariable, setStateFunction] = useState(initialValue);
    function increase() {
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
    return(
        <>
        <h1>Count : {count}</h1>
        <button style={{ marginRight: "10px" }} onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </>
    )
}
