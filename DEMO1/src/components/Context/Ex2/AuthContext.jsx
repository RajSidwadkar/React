import {UserContext} from './AuthContext';
import { useContext } from 'react';
import React, { createContext, useState } from 'react';
import Auth from './Auth';

let UserContext = createContext();
const AuthContext = () => {   
  
    const [user, setUser] = useState(null);
    const login = () => {
        setUser("Raj Sidwadkar");
    }
    const logout = () => {
        setUser(null);
    }

    return(
        <>
        <UserContext.Provider value={{ user, login, logout }}>
            <Auth />
        </UserContext.Provider>
        </>
    )
};

export default AuthContext;
export { UserContext };