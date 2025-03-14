import React from 'react';
import './experience_card.css';

function ExperienceCard({ icon, title, company, date, description, linkCompany }) {

    return (
        <div className="experience_card-container">
            <div className="icon">{icon}</div>
            <div className="experience_card">
                <h3 className="job-title">{title}</h3>
                {
                    linkCompany != null ? (
                        <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="company">{company}</a> ) :
                    ( <p className="company">{company}</p>)
                }

                <p className="date">{date}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;
