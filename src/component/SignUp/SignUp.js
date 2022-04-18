import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate(from, {replace: true});
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Please type Same password');
            return;
        }
        if(password.length <6){
            setError('Minimum 6 caracters Or More');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password'  required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Your Confirm Password' />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;