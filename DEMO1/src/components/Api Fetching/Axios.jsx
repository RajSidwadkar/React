import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error: {error}</h2>
    }

    return (
        <ul>
            {users.map((x,i) => {
                return <li key={x.id}>{x.name} - {x.email}</li>
            })}
        </ul>
    )
}

export default Axios
