import React from 'react';
import "./button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function Button(props) {

    return (
        <div className="button_content">
            {
                props.to != null ? <Link to={props.to}>
                    <button className="myButton" onClick={props.onClick}>
                        {
                            props.icon != null ?
                                <FontAwesomeIcon icon={props.icon} style={{ marginRight: 12}}/> : null
                        }

                        {props.title}

                    </button>
                </Link> :
                    <a href={props.href} className="myButton" onClick={props.onClick} target="_blank" rel="noopener noreferrer">
                        {
                            props.icon != null ?
                                <FontAwesomeIcon icon={props.icon} style={{ marginRight: 12}}/> : null
                        }
                        {props.title}
                    </a>
            }

        </div>
    );
}

export default Button