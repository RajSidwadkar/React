import { createContext, useState } from "react";
import Auth from "./Auth";

let userContext = createContext();

const AuthContext = () => {
  const [user, setUser] = useState(null);
  const login = () => setUser("Onkar");
  const logout = () => setUser(null);
  return (
    <>
      <userContext.Provider value={{ user, login, logout }}>
        <Auth />
      </userContext.Provider>
    </>
  );
};

export default AuthContext;
export { userContext };
