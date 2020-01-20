import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1>Contact me:</h1>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/hadeeqa-saman-10a482132/">
                    <i class="fab fa-linkedin"></i>
                </a> |
                <a href="mailto:hadeeqasaman95@gmail.com">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}
export default Contact