import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {

    const { isLogin, isLoading } = useContext(AuthContext);

    if (isLoading) return <p>Loading...</p>

    if (!isLogin) return <Navigate replace to='/login' />

    return children;
}

export default ProtectedRoute;