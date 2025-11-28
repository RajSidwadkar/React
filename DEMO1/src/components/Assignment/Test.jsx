import React from 'react';
import { useState } from 'react';


export default function Test() {
    const person = {
        fname: "",
        email: ""
    };
    const [formData, setFormData] = React.useState(person);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <>
        <form>
            <input type="text" placeholder="Enter Name" onChange={handleChange} />
            <input type="text" placeholder="Enter email" onChange={handleChange} />

        </form>
        <h2>Name: {formData.fname} </h2>
        <h2>Email: {formData.email} </h2>
        </>
    )
}