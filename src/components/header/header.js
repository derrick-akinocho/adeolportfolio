import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {

    return (
        <header className="header">
            <div className="logo">
                <Link className="Link" to="/">
                    <img src={"https://i.ibb.co/yFZdq9tG/logom.png"} className="logo" alt={"AdeolArt Logo"} />
                </Link>
            </div>
        </header>
    );
}

export default Header;
