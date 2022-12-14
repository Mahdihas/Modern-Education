import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import ClipLoader from "react-spinners/ClipLoader";



const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        console.log('yes loading found');
        return <div><ClipLoader color="#36d7b7" /></div>
    }

    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;