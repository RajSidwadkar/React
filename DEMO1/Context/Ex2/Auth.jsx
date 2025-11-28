import { useContext } from "react";
import { userContext } from "./AuthContext";

const Auth = () => {
  let { user, login, logout } = useContext(userContext);
  return (
    <>
      {user ? (
        <div>
          <h1>Welcome {user}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
            <h2>Please Login</h2>
            <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};

export default Auth;
