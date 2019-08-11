import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';


const LoadingScreen = () => { 
    const { checkLocalCredentials } = useContext(AuthContext);

    useEffect(() => {
        checkLocalCredentials();
    }, []);

    return null; 
};


export default LoadingScreen; 