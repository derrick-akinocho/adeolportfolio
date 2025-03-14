import React from "react";
import './skills.css';

function Skills ({src, skill}) {
    return(
        <div className="skills_card">
            <img src={src} alt={"Lodo " + skill}/>
            <p className="title">{skill}</p>
        </div>
    )
}

export default Skills