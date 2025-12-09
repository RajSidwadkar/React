import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CRUD_Operations = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

    async function fetchUsers() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    const addUser = async () => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', {name})
        setUsers([...users, res.data])
    }
    const updateUser = async (id) => {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {name: 'Updated Name'})
        const updatedUsers = users.map((user,i) => user.id === id ? res.data : user)
        setUsers(updatedUsers)
    }
    const deleteUser = async (id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

    useEffect(() => {
        fetchUsers();
    }, [])
  return (
  <div>
    <input type="text" onChange={e => setName(e.target.value)}/>
    <button onClick={addUser}>Add User</button>
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div>{user.name} - {user.email}</div>
          <button onClick={() => updateUser(user.id)}>Update</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
)

}

export default CRUD_Operations
