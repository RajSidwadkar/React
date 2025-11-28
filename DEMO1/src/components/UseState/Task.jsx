import {useState} from 'react';

export default function Task(){

    let [name , setName] = useState('Raj');

    function changeName(){
        if(name === "Sidwadkar"){
            setName("Raj");
            return;
        }
        setName("Sidwadkar");
    }
    return(
        <>
        <h1>Name : {name}</h1>
        <button style={{ backgroundColor: "blue", color: "white" }} onClick={changeName}>Change</button>
        </>
    )
}