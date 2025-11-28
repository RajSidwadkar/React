import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const isLoggedIn = localStorage.getItem('auth'); 
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default PrivateRoutes
