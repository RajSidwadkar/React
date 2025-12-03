import React, { useEffect } from 'react'
import { useState } from 'react'

const FetchAPI = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    },[])  


    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error: {error}</h2>
    }

  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {users.map((x,i) => {
                return <li key={x.id}>{x.name} - {x.email}</li>
            })}
        </ul>
    </div>
  )
}

export default FetchAPI
