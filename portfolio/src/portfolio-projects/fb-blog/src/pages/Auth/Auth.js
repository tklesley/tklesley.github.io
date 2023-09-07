import React, { useEffect, useState } from 'react';
import './auth.css';
import { auth } from '../../config/firebaseConfig';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';


export default function Auth() {

  let navigate = useNavigate();

  let isLoggedIn = false;
  if (auth.currentUser != null) {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(res=>{
      navigate('/portfolio/blog')
    })
    .catch(err=>{
      alert(err.code)
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(res=>{
      updateProfile(auth.currentUser, {displayName: name})
      navigate('/portfolio/blog')
    })
    .catch(err=>{
      alert(err.message)
    })
  }

  return (
    <>{
    !isLoggedIn 
    ? <Routes>
      <Route path='' element={
        <div>
          <form className='auth-form' onSubmit={handleLogin}>
            <h1>Login with your Email</h1>
            <div className='form-group'>
              <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email || ""}  required />
              <input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password || ""}  required />
            </div>
            <button type='submit'>Submit</button>
            <p>Don't have an account? <Link to={'signup'} className='form-link'>Sign Up</Link></p>
          </form>
        </div>
      } />
      <Route path='signup' element={
        <div>
          <form className='auth-form' onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            <div className='form-group'>
              <input type='text' placeholder='Enter your username' onChange={(e)=>setName(e.target.value)} value={name || ""}  required />
              <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email || ""}  required />
              <input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password || ""}  required />
            </div>
            <button type='submit'>Submit</button>
            <p>Already have an account? <Link to={'/auth'} className='form-link'>Log In</Link></p>
          </form>
        </div>
      } />
    </Routes>
    : <div className='auth-logged-in'>
      <h1>You are logged in.</h1>
      <p>If you need to log out, use the button in the upper right.</p>
    </div>
    }</>
  )
}