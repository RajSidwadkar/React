import { useState } from "react";

function ObjectEx() {
    const [person, setPerson] = useState({
        name : "Raj",
        city : "Pune",
        gender : "Male"
    });

    function handleClick(){
        setPerson({...person, city: "Mumbai"});
    }



    return(

        <>
        <div style= {{alignItems: "center", textAlign: "center", border: "2px solid black", width: "300px", marginLeft: "500px", marginTop: "50px", padding: "20px", boxShadow: "10px 10px 5px grey"}}>
            <h2>Name : {person.name}</h2>
            <h2>City : {person.city}</h2>
            <h2>Gender : {person.gender}</h2>
        </div>

        <button style={{marginLeft: "20px"}} onClick={handleClick}>Change City</button>
        </>
    )
}
export default ObjectEx