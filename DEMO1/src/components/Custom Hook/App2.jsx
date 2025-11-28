
import useCounter from "./CustomHook.jsx";

function App2() {  
    const[count, handleAdd, handleSub, handleReset] = useCounter();
    return (
      <>
      <h1>Counter App</h1>
      <div>{count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
      </>
    );
    }
export default App2;
