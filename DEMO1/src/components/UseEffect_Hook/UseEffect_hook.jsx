import { useEffect } from "react"

function UseEffect_hook() {
    const count1 = 0;
    useEffect(() => {
        console.log("Component Mounted");

    });
    return (
        <>

        <h1>UseEffect Hook</h1>
        </>

    )
}
export default UseEffect_hook;