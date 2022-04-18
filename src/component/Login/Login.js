import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignin from './GoogleSignin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <div>
                    {<GoogleSignin></GoogleSignin>}
                    <div className='mt-1 mb-1'><h1>Or</h1></div>
                </div>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <div>
                    Forget Password ?<a href="">Lost Password</a>
                </div>
                <p>
                    OnShortS? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;