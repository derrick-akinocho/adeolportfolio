import React from 'react';
import './education_card.css';

function EducationCard ({title, company, linkCompany, date}) {

    return(
        <div className="education_card">

            <p className="title_edu">{title}</p>

            {
                linkCompany != null ? (
                        <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="company">{company}</a> ) :
                    ( <p className="company">{company}</p>)
            }
            <p className="date_edu">{date}</p>

        </div>
    )
}

export default EducationCard;