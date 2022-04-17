import React from 'react';
import { Link } from 'react-router-dom';
import logoo from './404-error-template-10.webp';
import './Notfound.css';

function Notfound() {
  
  return <Link to='/home'><img style={{width:'100%', height:'100%'}} src={logoo} alt="404-error-template-10.webp" /></Link>;
}

export default Notfound;