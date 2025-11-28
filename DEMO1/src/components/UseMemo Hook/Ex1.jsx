import React, { use } from 'react'
import {useState, useMemo} from 'react';

let arr = ['Raj','Jannu','Sakshi','Krishna'];


function Ex1() {
    const [c,setC] = useState("");
    const [count,setCount] = useState(0);
   
    const match = useMemo(() => {
        console.log("Filtering...");
       const q = c.trim().toLowerCase();
    return q ? arr.filter(item => item.toLowerCase().includes(q)) : [];
  }, [c]);
    

 
    
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick ={() => setCount(count + 1)}>Add</button> <br /><br />
        <input type="text" value={c} onChange={(e) => setC(e.target.value)} placeholder='name' />
        <ul>{match.map((item, index) =>{ return <li key={index}>{item}</li>})}</ul>
    </div>
  )
}

export default Ex1
