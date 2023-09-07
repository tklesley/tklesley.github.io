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
                        title: "Github",
                        bgcolor: "#FF6600",
                        desc: "Github is where most of my projects are hosted, including this portfolio.",
                        img: "https://cdn.discordapp.com/attachments/540980108828344330/1149139818811510944/github-logo.png",
                        alt: "Github Logo",
                        link: "https://github.com/tklesley?tab=repositories"
                    }}
                />
                <ProjectItem 
                    prObj={{
                        title: "Stock Photo Fishing",
                        bgcolor: "#66FF66",
                        desc: "This was a project I started when I was first learning React.  It is currently hosted on Replit and will take a moment to load.  While the code is a mess, the app itself is a fun little distraction.",
                        img: "https://cdn.discordapp.com/attachments/540980108828344330/1149142112743469116/stock-photo-fishing.png",
                        alt: "Stock Photo Fishing",
                        link: "https://stock-photo-fishing.tklesley.repl.co/"
                    }}
                />
                <ProjectItem 
                    prObj={{
                        title: "Firebase Blog",
                        bgcolor: "#6600FF",
                        desc: "This was a project made as part of the Mimo Dev Bootcamp.  It uses Google Firebase to store the data for users and blog posts.  To prevent the site from being griefed, everything is set to read only.  You can create an account, log in/out, and open the Add Article page but you cannot create articles.  Due to Firebase's free quota being small, it is possible to get too many reads.  That may prevent the site from loading properly.",
                        img: "https://cdn.discordapp.com/attachments/540980108828344330/1149396082577649751/Group_1FB-Blog.png",
                        alt: "Firebase Blog",
                        link: "/portfolio/blog"
                    }}
                />
            </div>

        </div>
    )
}

/* Hard coded project item format

                <ProjectItem 
                                    prObj={{
                                        title: "Project",
                                        bgcolor: "#6600FF",
                                        desc: "This is a project",
                                        img: "",
                                        alt: "Placeholder",
                                        link: "tkl.fyi"
                                    }}
                                />
*/