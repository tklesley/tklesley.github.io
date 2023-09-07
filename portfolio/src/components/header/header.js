import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './header.css';
import { AiOutlineHome } from "react-icons/ai";
import Settings from "../settings/settings";

export default function Header({toggleDarkmode, darkmode}) {

    const [settingOpen, setSettingOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        function handleResize() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    

    if (windowSize <= 700) {
        return (
            <>
                <div className="header-container">
                    <Link to={`/`}><AiOutlineHome size={45} /></Link>
                    <div></div>
                    <button className={`settings-icon settings-button settings-${settingOpen}`} onClick={() => setSettingOpen(!settingOpen)}>
                        Settings
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>
                </div>
                <div className={`settings-container settings-open-${settingOpen}`}>
                    <Settings
                        toggleDarkmode={()=>toggleDarkmode()}
                        darkmode={darkmode}
                        setSettingOpen={()=>setSettingOpen(false)}
                        />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="header-container">
                    <Link to={`/`}><AiOutlineHome size={45} /></Link>
                    <div></div>
                    <Settings
                        toggleDarkmode={()=>toggleDarkmode()}
                        darkmode={darkmode}
                        />
                </div>
            </>
        )
    }

    
}