import React from 'react';
import './realisation_card.css';
import Button from "../../_atoms/button";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function RealisationCard ({name, skills, picture, alt, description, link, gitLink}) {

    return(
        <div className="realisation_card">
            <img src={picture} alt={alt}/>

            <p className="name">{name}</p>

            <div className="skills">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-card">{skill}</span>
                ))}
            </div>

            <p className="description">{description}</p>

            <div className="buttons">
                <Button href={link} title="Démo"/>
                <Button href={gitLink} icon={faGithub} title="Projet Git"/>
            </div>

        </div>
    )
}

export default RealisationCard;