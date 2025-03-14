import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

function Footer (props) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

    return (
        <footer className="footer">

            <div className="footer_social">

                <img onClick={scrollToTop} className="chat6" src={"https://i.ibb.co/bjDz5SkG/chat6.png"} alt="Mr Chat"/>

                <a href="https://linkedin.com/in/derrick-akinocho" target="_blank" rel="noopener noreferrer"
                   className="socialf-link"><FaLinkedin/></a>
                <a href="https://github.com/derrick-akinocho" target="_blank" rel="noopener noreferrer"
                   className="socialf-link"><FaGithub/></a>
                <div onClick={handleCopyEmail} className="socialf-link"><SiGmail/></div>
            </div>

        </footer>
    );
}

export default Footer;
