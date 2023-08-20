import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

export default function Projects() {
    return (
        <div className="page-layout">
            <div className="name">Tyler Lesley</div>
            <div className="sections-container">
                <div className="tabs portfolio">Portfolio</div>
                <div className="projects-sections">
                    <div className="p1">Project 1</div>
                    <div className="p2">Project 2</div>
                    <div className="p3">Project 3</div>
                </div>
                <div className="tabs about">About</div>
                <div className="tabs contact">Contact</div>
            </div>
        </div>
    )
}