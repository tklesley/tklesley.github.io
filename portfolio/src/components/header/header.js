import React, { useState, useEffect } from "react";
import './header.css';
import { AiOutlineHome } from "react-icons/ai";
import Settings from "../settings/settings";

export default function Header() {

    const [settingOpen, setSettingOpen] = useState(false);

    return (
        <>
            <div className="header-container">
                <AiOutlineHome size={45} />
                <div></div>
                <button className={`settings-icon settings-button settings-${settingOpen}`} onClick={() => setSettingOpen(!settingOpen)}>
                    Settings
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
            </div>
            <div className={`settings-container settings-open-${settingOpen}`}>
                <Settings />
            </div>
        </>
    )
}