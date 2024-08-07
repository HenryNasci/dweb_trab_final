import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ children }) {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? children : <Navigate to="/Login" />;
}

export default PrivateRoute;
