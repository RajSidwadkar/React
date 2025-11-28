import { UserContext } from "./AuthContext";
import { useContext } from "react";

const Auth = () => {
    let { user, login, logout } = useContext(UserContext);
    return(
        <>
        {user ?(
        <div>
            <h1>Welcome {user}</h1>
            <button onClick={logout}>Logout</button>

        </div>
        ):(
        <div>
            <h1>Please Login</h1>
            <button onClick={login}>Login</button>
        </div>)}
        </>
    )

}
export default Auth;