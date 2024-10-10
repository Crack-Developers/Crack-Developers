import "./ContactForm.css";
import React, {useState} from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);

        const serviceId = 'service_4b3m67w';
        const templateId = 'template_cwtnl7t';
        const publicKey = '4AK_G8ie9sKNAFjA5';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: email,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email Sent Successfully', response);
            setEmail('');
            setName('');
            setMessage('');
        })
        .catch((error) => { 
            console.error('Error Sending Message', error);
        });
    }

    return(
        <div className="form-container">
            <h1 className="ctitle">Send a message to us!</h1>
            <form onSubmit={handleSubmit} className="emailForm">
                <input
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                
                <textarea 
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} >   
                    </textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;