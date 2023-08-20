import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

export default function Landing() {
    return (
        <div className="page-layout">
            <div className="name">Tyler Lesley</div>
            <div className="sections-container">
                <Link to={`projects`} className="tabs portfolio">Portfolio</Link>
                <div className="tabs about">About</div>
                <div className="tabs contact">Contact</div>
            </div>
        </div>
    )
}