import React from "react";
import { Link } from "react-router-dom";
import "./project-item.css";

export default function ProjectItem({prObj}) {
    return (
        <div className="individual-project" style={{border:`5px solid ${prObj.bgcolor}`}}>
            <div className="bg-color-tab" style={{backgroundColor:`${prObj.bgcolor}`}}></div>
            <div className="proj-title">{prObj.title}</div>
            <div className="proj-img">{ (prObj.img === "") ? <div className="indv-placeholder-img">Placeholder</div> : <img src={`${prObj.img}`} alt={prObj.alt}/>}</div>
            <div className="proj-desc">{prObj.desc}</div>
            <Link to={prObj.link} className="proj-link">Click Here to Visit</Link>
        </div>
    )
}