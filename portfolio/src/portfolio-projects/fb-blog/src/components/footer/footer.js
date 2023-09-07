import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
    return (
        <Link to="/" className="fb-footer-container"><p style={{marginRight: "4px"}}>Return to tkl.fyi</p> <FaHome/></Link>
    )
}