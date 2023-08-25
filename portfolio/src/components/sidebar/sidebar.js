import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {

    const [pHover, setPHover] = useState(false);
    const [aHover, setAHover] = useState(false);
    const [cHover, setCHover] = useState(false);

    return (
        <div className="sidebar-container">
            <Link to={`/projects`} className={`sidebar-item p-side hover-${pHover}`}
                onMouseEnter={() => setPHover(true)}
                onMouseLeave={() => setPHover(false)}
                >{pHover ? 'Portfolio' : 'P'}</Link>
            <Link to={`/about`} className={`sidebar-item a-side hover-${aHover}`}
                onMouseEnter={() => setAHover(true)}
                onMouseLeave={() => setAHover(false)}
                >{aHover ? 'About' : 'A'}</Link>
            <Link to={`/contact`} className={`sidebar-item c-side hover-${cHover}`}
                onMouseEnter={() => setCHover(true)}
                onMouseLeave={() => setCHover(false)}
                >{cHover ? 'Contact' : 'C'}</Link>
        </div>
    )
}