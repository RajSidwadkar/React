import React from "react";
import { useState,useEffect } from "react";
const useFetch = () => {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


useEffect(()=>{
    async function fetchData(){
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new Error("Network response was not ok");
            const jsonData=await response.json();
            setData(jsonData);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
},[]
);      
return { data, loading, error };
};



export default useFetch;
