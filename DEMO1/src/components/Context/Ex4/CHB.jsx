import React from 'react'
import useFetch from './CHA'

const CHB = () => {
  const {data, loading, error} = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CHB
