import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const indexOfLastItem = page * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const fetchData = async () => {
        const res = await axios.get('https://dummyjson.com/users?limit=100')
        setData(res.data.users)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1>Page {page}</h1>
            <div>
                Items per page: <span> {itemsPerPage} </span>

                <select
                    value={itemsPerPage}  
                    onChange={(e) => setItemsPerPage((e.target.value))} 
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

            <ul>
                {currentItems.map(item => (
                    <li key={item.id}>{item.firstName} {item.lastName}</li>
                ))}
            </ul>
            <div>
                <button onClick={() => setPage(1)} disabled={page === 1}>{'<<'}</button>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>{'<'}</button>

                {/* <button  onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button> */}
                {
                    Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (x, i) => (
                        <button key={i + 1} onClick={() => setPage(i + 1)} disabled={page === i + 1}>{i + 1}</button>
                    ))
                }
                <button onClick={() => setPage(page + 1)} disabled={indexOfLastItem >= data.length}>{'>'}</button>
                <button onClick={() => setPage(Math.ceil(data.length / itemsPerPage))} disabled={page === Math.ceil(data.length / itemsPerPage)}>{'>>'}</button>
            </div>



        </div>
    )
}

export default Pagination
