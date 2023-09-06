import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./projects.css";
import ProjectItem from "../../components/project-item/project-item";

export default function Projects() {
    return (
        <div className="p-page">
            <div className="p-title">Portfolio</div>
            <Sidebar />
            <div className="projects-section">
                <ProjectItem 
                    prObj={{
                        title: "Project 1",
                        bgcolor: "#FF6600",
                        desc: "This is the first project",
                        link: "tkl.fyi"
                    }}
                />
                <ProjectItem 
                    prObj={{
                        title: "Stock Photo Fishing",
                        bgcolor: "#66FF66",
                        desc: "This was a project I started when I was first learning React.  It is currently hosted on Replit and will take a moment to load.  While the code is a mess, the app itself is a fun little distraction.",
                        link: "https://stock-photo-fishing.tklesley.repl.co/"
                    }}
                />
                <ProjectItem 
                    prObj={{
                        title: "Project 3",
                        bgcolor: "#6600FF",
                        desc: "This is the third project",
                        link: "tkl.fyi"
                    }}
                />
            </div>

        </div>
    )
}