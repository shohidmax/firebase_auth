import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSignin from './GoogleSignin';
import './Login.css';
// import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const emailRe = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
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
    console.log(handleEmailBlur);

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
    const resetPassword = async () => {
        const email = emailRe.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Verify your Email');
        }
        else{
            toast('please enter your email address');
        }
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
                        <input ref={emailRe}  onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{ error?.message ? (<div><p>please Provide Valid Information</p></div>):(<div></div>)
                    
                    }</p><br/>
                    {
                        loading && <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    } <br/>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <div>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password<ToastContainer /></button> </p>
                     
                </div>
                <p>
                    OnShortS ? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;