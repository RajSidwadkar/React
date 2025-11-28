import React from 'react'
import useLocalStorage from './CHA';

const CHB = () => {
    const {value, setStoredValue} = useLocalStorage('Username', '');
  return (
    <div>
      <h1>Welcome {value}</h1>
      <input
        type="text"
        placeholder='Enter Username'
        onChange={(e) => setStoredValue(e.target.value)}
      />
      <button onClick={() => localStorage.removeItem('Username')}>Delete from Local Storage</button>
    </div>
  );
};

export default CHB
