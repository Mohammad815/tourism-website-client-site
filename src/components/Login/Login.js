import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {SignWithGoogle} = useAuth();
    return (
        <div>
            <h2>Please Sign In With Google</h2>
            <button onClick={SignWithGoogle}>Sign With Google</button>
        </div>
    );
};

export default Login;