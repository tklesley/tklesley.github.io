import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./about.css";

export default function About() {
    return (
        <div className="a-page">
            <div className="a-title">About</div>
                <Sidebar />
                <div className="about-section">
                    <p>I'm a web developer working primarily with React.js.  I've gone through the Mimo Web Development bootcamp and have a certificate from doing so.<br/>
                    Some relevant skills include:</p>
                    <ul>
                        <li>HTML, CSS, and Javascript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Google Firebase</li>
                        <li>Python</li>
                        <li>GitHub</li>
                        <li>PC-DMIS</li>
                    </ul>
                </div>
        </div>
    )
}