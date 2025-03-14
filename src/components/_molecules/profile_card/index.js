import React from "react";
import Avatar from "../../_atoms/avatar";
import Button from "../../_atoms/button";
import './profile_card.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

function ProfileCard () {

    const email = "akinochoderrick@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('E-mail copié dans le presse-papiers !');
            })
            .catch((err) => {
                console.error('Erreur lors de la copie : ', err);
            });
    };

    const skills = [
        'PHP',
        'Java',
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Spring Boot',
        'Git',
        'PHPUnit',
        'CSS',
        'RESTful APIs',
        'Tailwind'
        ,]

    return (
        <div className="card">

            <div className="profile-card">

                <div className="avatar-container">
                    <Avatar/>
                </div>

                <div className="info-container">
                    <p className="title">DERRICK AKINOCHO</p>
                    <p className="subtitle">Développeur Front-end | Back-end | Web et Mobile</p>
                    <p className="location"> <FaLocationDot style={{marginRight: 10}}/>Écully Auvergne Rhône Alpes</p>
                    <p className="description"> Je suis un développeur Full Stack en début de carrière,
                        passionné par la création de sites web et d'applications mobiles. Avec 3 ans d'expérience dans
                        des projets personnels et professionnels, j'ai acquis des bases solides en développement
                        frontend et backend, ainsi qu'une forte motivation pour continuer à apprendre et à progresser.
                    </p>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-card">{skill}</span>
                        ))}
                    </div>

                    <Button
                        href={"https://drive.google.com/file/d/19wxfW8W4eEXm7FL97WbaaA9cMBgw93mD/view?usp=drive_link"}
                        title="Télécharger mon CV"/>

                </div>

                <div className="social-container">
                    <a href="https://linkedin.com/in/derrick-akinocho" target="_blank" rel="noopener noreferrer"
                       className="social-link"><FaLinkedin/></a>
                    <a href="https://github.com/derrick-akinocho" target="_blank" rel="noopener noreferrer"
                       className="social-link"><FaGithub/></a>
                    <div onClick={handleCopyEmail} className="social-link"><SiGmail/></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
