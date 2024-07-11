// src/Login.js
import React, { useState } from 'react';
import '../styles/Register.css';
import logo from '../../assets/logos/badge-abcd-logo.svg';
import SocialCommunities from '../sidebar/social-communities/Social-communities';

function Register() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Company Name:', companyname);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='register-container'>
      <div className='logo badge-abcd-logo'>
        <img src={logo} alt='ABCD Logo' />
      </div>
      <h1>Welcome Onboard!</h1>
      <p>To kick things off, we need a bit of info.</p>
      <p>Fill in your details below, and let's get you set up in no time.</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder='First Name'
          />
          <input
            type='text'
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder='Last Name'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            placeholder='Company Name'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email Address'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Reset Password'
          />
        </div>
        <button type='submit' className='btn'>
          Register
        </button>
      </form>
      <div className='formlink-below'>
        <ul className='formlinks'>
          <li>
            <a href='/' className='orange-link'>
              Create Account
            </a>
          </li>
          <li>
            <a href='/' className='orange-link'>
              Forget Password?
            </a>
          </li>
        </ul>
      </div>
      <div className='social-login'>
        <div className='or-divider'>
          <ul className='or-divider-listitems'>
            <li className='or-divider-listitem'>
              <hr />
            </li>
            <li className='or-divider-listitem'>
              <span className='or-divider-line'>OR</span>
            </li>
            <li className='or-divider-listitem'>
              <hr />
            </li>
          </ul>
        </div>
        <SocialCommunities />
      </div>
    </div>
  );
}

export default Register;
