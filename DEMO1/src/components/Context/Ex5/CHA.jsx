import React from 'react'
import { useState } from "react";
const useToggle = (initialValue= false) => {
    const [data,setData]=useState(initialValue);

    const toggle = () => setData(prev => !prev);
    return [data,toggle];
};

export default useToggle;

