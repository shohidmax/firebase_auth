import React from 'react';
import logo from '../../image/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p >Successfully Loged</p>
      </div>
    );
  }
    
    return (
        <div className=' btn bg-succes w-50 mx-auto border'>
            <img style={{width: "30px"}} src={logo} alt="" />
            <button onClick={() => signInWithGoogle()} style={{ background:"border-box"}} className='border-0'>Google Sign In</button>
        </div>
    );
};

export default GoogleSignin;