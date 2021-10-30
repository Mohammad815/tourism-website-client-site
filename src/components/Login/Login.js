import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {SignWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
      SignWithGoogle()
      .then((result) => {
          history.push(redirect_uri)
        })
    }
    return (
        <div>
            <h2>Please Sign In With Google</h2>
            <button onClick={handleGoogleLogin}>Sign With Google</button>
        </div>
    );
};

export default Login;