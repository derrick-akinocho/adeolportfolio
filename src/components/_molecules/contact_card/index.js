import React, {useState} from "react";
import './contact_card.css';

function ContactCard() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="contact_card">
            <div className="formContact">
                <p className="title">Contact</p>
                <form onSubmit={handleSubmit}>

                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Comment puis-je vous appeler ?"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Comment puis-je vous recontacter ?"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Votre message !"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Transmettre</button>
                </form>
            </div>

            <img src={"https://i.ibb.co/Cs6zn62Y/chat5.png"} alt="Mr Chat"/>
        </div>
    )
}

export default ContactCard