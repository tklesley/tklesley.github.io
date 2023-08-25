import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./projects.css";

export default function Projects() {
    return (
        <div className="p-page">
            <div className="p-title">Portfolio</div>
            <Sidebar />
            <div className="projects-section">
                <div className="p1">Project 1</div>
                <div className="p2">Project 2</div>
                <div className="p3">Project 3</div>
            </div>

        </div>
    )
}