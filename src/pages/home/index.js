import React from 'react';
import './home.css';
import {experiences, projects, educations, skills} from '../../res/globalData';
import ProfileCard from "../../components/_molecules/profile_card";
import RealisationCard from "../../components/_molecules/realisation_card";
import ExperienceCard from "../../components/_molecules/experience_card";
import EducationCard from "../../components/_molecules/education_card";
import Skills from "../../components/_molecules/skills";
import ContactCard from "../../components/_molecules/contact_card";


const Home = () => {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, // Ou document.body.scrollHeight
            behavior: 'smooth'
        });
    };

    return (
        <div className="home-page">

            <section className="section_profile">
                <img onClick={scrollToBottom} className="chat1" src={"https://i.ibb.co/hFXYnvh9/chat1.png"} alt="Mr Chat"/>

                <ProfileCard/>
            </section>

            <section className="section_realisations">

                <img className="chat2"
                     onClick={()=>alert("Mr Chat 🐾 : Je ne suis qu’un chat parmi d’autres, mais mes réalisations " +
                         "sont des chefs-d’œuvre… enfin, presque. Disons qu’elles ont du poil aux pattes.")}
                     src={"https://i.ibb.co/4wrwXXpv/chat2.png"} alt="Mr Chat"/>
                <p className="section_title"> REALISATIONS </p>

                <p className="section_desc">De l’idée à la réalisation, voici des projets qui incarnent ma vision du
                    développement et du design. Découvrez-les !</p>

                <div className="realisations_container">

                    {
                        projects.map((project, index) => (
                            <RealisationCard
                                key={index}
                                name={project.name}
                                description={project.description}
                                skills={project.skills}
                                link={project.link}
                                gitLink={project.gitLink}
                                picture={project.picture}
                                alt={project.alt}
                            />
                        ))
                    }

                </div>

            </section>

            <section className="section_experience">

                <img className="chat3"
                     onClick={()=>alert("Mr Chat 🐾 : Mes expériences professionnelles ? Autant de nuits passées " +
                         "à chasser les bugs… et parfois les souris. Chaque projet est une aventure, " +
                         "mais je garde toujours une patte de secours..")}
                     src={"https://i.ibb.co/Z6vkkdpj/chat3.png"} alt="Mr Chat"/>
                <p className="section_title"> EXPERIENCES </p>

                <p className="section_desc"> Alliant créativité et compétences techniques, je contribue à la conception
                    de solutions web
                    performantes et intuitives, en explorant la création d'APIs et le développement d'interfaces
                    utilisateur dynamiques et modernes.</p>

                <div className="experiences_time">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`experiences_time-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <ExperienceCard
                                title={exp.title}
                                date={exp.date}
                                description={exp.description}
                                company={exp.company}
                                linkCompany={exp.linkCompany}
                                icon={exp.icon}
                            />
                        </div>
                    ))}
                </div>

            </section>

            <section className="section_education">
                <img className="chat4"
                     onClick={()=>alert("Mr Chat 🐾 : J’ai appris à coder avec la patience d’un chat qui guette " +
                         "une souris. Et comme tout bon félin, j’ai suivi mon instinct... et quelques tutoriels en ligne.")}
                     src={"https://i.ibb.co/cKx0fHLh/chat4.png"} alt="Mr Chat"/>
                <p className="section_title"> EDUCATION </p>

                <div className="educations_container">

                    {
                        educations.map((edu, index) => (
                            <EducationCard
                                key={index}
                                title={edu.title}
                                company={edu.company}
                                date={edu.date}
                                linkCompany={edu.linkCompany}
                            />
                        ))
                    }

                </div>

                <div className="br"></div>

                <p className="section_title"> SKILLS </p>

                <div className="skills_container">

                    {
                        skills.map((skill, index) => (
                            <Skills
                                key={index}
                                skill={skill.title}
                                src={skill.img}
                            />
                        ))
                    }

                </div>

            </section>

            <p className="contactMe">INUTILE DE SCROLLER, IL N'Y A PLUS RIEN. PRENEZ CONTACT AVEC MOI.</p>

            <section className="section_contact">

                <ContactCard />
            </section>

        </div>
    );
};

export default Home;

