import React from "react";
import './settings.css';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Settings() {
    return (
        <div className="settings-div">
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="light-mode-settings">
                <MdOutlineLightMode /> <MdOutlineDarkMode />
            </div>
        </div>
    )
}