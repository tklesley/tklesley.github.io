import React from "react";
import { Link } from "react-router-dom";
import './settings.css';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Settings({toggleDarkmode, darkmode, setSettingOpen}) {
    
    if (window.matchMedia("(max-width: 700px)").matches) {
        return (
            <div className="settings-div">
                <div className="nav-list">
                    <ul className="ul-settings">
                        <li className="li-settings"><Link to={`/`} onClick={setSettingOpen}>Home</Link></li>
                        <li className="li-settings"><Link to={`/projects`} onClick={setSettingOpen}>Portfolio</Link></li>
                        <li className="li-settings"><Link to={`/about`} onClick={setSettingOpen}>About</Link></li>
                        <li className="li-settings"><Link to={`/contact`} onClick={setSettingOpen}>Contact</Link></li>
                    </ul>
                </div>
                <div className={`light-mode-settings`} onClick={toggleDarkmode()} aria-label="Darkmode Toggle">
                    <MdOutlineLightMode size={30}/>
                    <div className={darkmode ? `settings-circle settings-darkmode` : `settings-circle`}></div>
                    <MdOutlineDarkMode size={30}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="settings-div">
                <div className={`light-mode-settings`} onClick={toggleDarkmode()} aria-label="Darkmode Toggle">
                    <MdOutlineLightMode size={30}/>
                    <div className={darkmode ? `settings-circle settings-darkmode` : `settings-circle`}></div>
                    <MdOutlineDarkMode size={30}/>
                </div>
            </div>
        )
    }
    
}