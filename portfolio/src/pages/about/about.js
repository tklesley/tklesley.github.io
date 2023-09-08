import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./about.css";

export default function About() {
    return (
        <div className="a-page">
            <div className="a-title">About</div>
                <Sidebar />
                <div className="about-section">
                    About Me Goes Here
                </div>
        </div>
    )
}