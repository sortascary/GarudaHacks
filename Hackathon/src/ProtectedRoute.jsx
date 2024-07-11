import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './Authcheck';

const ProtectedRoute = ({children}) => {
    const { currentUser } = useAuth();

    if(!currentUser){
        return <Navigate to='/Login'/>;
    }

    return children;
}
export default ProtectedRoute;