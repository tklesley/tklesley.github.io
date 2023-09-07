import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './header.css';
import { auth } from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export default function Header() {
    
    const categories = ["Health", "Food", "Technology", "Travel"];
    const navigate = useNavigate();
    const [user]=useAuthState(auth);

 return (
    <div className='fb-header-container'>
        <FaHome className='home-icon' onClick={()=>navigate('/portfolio/blog')} />
        {
            user ? <Link className='auth-link' to="addArticle">Add Article</Link>
            : <></>
        }
        <div className='categories-container'>
        {
            categories.map(item=>{
                return <Link to={`category/${item}`} className='nav-link' key={item}>{item}</Link>
                })
        }
        </div>
        {
            user ? <div>
                <span className='username'>{user.displayName ? user.displayName : user.email}</span>
                <button onClick={() => signOut(auth)} className='auth-link'>Log Out</button>
            </div>
            : <Link className='auth-link' to='auth'>Sign In</Link>
        }
    </div>
 )   
}