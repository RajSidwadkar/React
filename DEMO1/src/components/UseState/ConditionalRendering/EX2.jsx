import {useState} from 'react';

export default function EX2(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLogout(){
        alert("Logged Out Successfully");
        
    }
    function handleLogin(){
        alert("Logged In Successfully");
        setIsLoggedIn(true);
    }

    return(
        <>
        <div>{isLoggedIn ? (
            <div>
                <h1>Welcome Back!</h1>
                <p>You are logged in Successfully</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div>
                <h1>Please Login</h1>
                <button onClick={handleLogin}>Login</button>
            </div>
        )}</div>
    </> 
    )
}
