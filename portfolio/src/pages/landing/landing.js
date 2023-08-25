import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

export default function Landing() {
    return (
        <div className="page-layout">
            <div className="name">Tyler Lesley</div>
            <div className="sections-container">
                <Link to={`projects`} className="tabs portfolio">Portfolio</Link>
                <Link to={`about`} className="tabs about">About</Link>
                <Link to={`contact`} className="tabs contact">Contact</Link>
            </div>
        </div>
    )
}