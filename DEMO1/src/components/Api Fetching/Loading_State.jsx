import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components';

const Loading_State = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    async function fetchUsers() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data)
        // setLoading(false)

    }

    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div>{loading ? <>
            <Loader></Loader>
            <h2>Loading...</h2></> :
            <ul>
                {users.map((x, i) => {
                    return <li key={x.id}>{x.name} - {x.email}</li>
                })}
            </ul>}

        </div>
    )
}

export default Loading_State

const spin = keyframes`
    100% { transform: rotate(360deg) }
`;

const Loader = styled.div`
    height: 50px;
    width: 50px;
    border: 5px solid #f3f3f3;
    border-radius : 50%;
    border-top: 5px solid #2faa3a;
    animation: ${spin} 2s linear infinite;
    `;