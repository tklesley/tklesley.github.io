import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./about.css";

export default function About() {
    return (
        <div className="a-page">
            <div className="a-title">About</div>
                <Sidebar />
                <div className="about-section">
                    <p>I currently work as a PC-DMIS programmer running Hexagon Metrology CMMs.  I've been running CMMs for six years and programming them for roughly two years.  In my free time, I've been working to learn software and web development with the goal of transfering to a new field.<br/><br/>
                    Some relevant skills include:</p>
                    <ul>
                        <li>PC-DMIS</li>
                        <li>HTML, CSS, and Javascript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Google Firebase</li>
                        <li>Python</li>
                        <li>GitHub</li>
                        <li>C#</li>
                    </ul>
                    <h2>Certifications</h2>
                    <ul>
                        <li>Mimo Web Development Certification</li>
                    </ul>
                    <h2>About PC-DMIS Programming</h2>
                    <p>PC-DMIS is a software used for running Coordinate Measurement Machines, or CMMs.  Programming in PC-DMIS involves writing programs that move the CMM around in 3D space to take measurements on various parts with high accuracy, usually within a micron.  In most cases, you can use a CAD model to assist in programming.  Some skills learned through my experience programming in PC-DMIS include interpreting undocumented code from previous programers, troubleshooting issues, debugging, reading engineering documentation, and editing programs.</p>
                </div>
        </div>
    )
}