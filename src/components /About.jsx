import React from 'react';
import '../styles/About.css'


const About = () => {
    return (
        <div className="about-container" >
            {/* <h1>About Me</h1> */}
            <div className="aboutme" id="about">
                <div className="img-container">
                </div>
                <div className="para-links">
                    <div className="para">
                        <h2>Hadeeqa Saman</h2>
                        <p>Software Engineer with 5+ years in the healthcare space. I thrive in fast-paced environments that have room for growth and emphasis on workplace community. I merge training in the medical space with web development to produce websites that are not only aesthetic but functional for people of many different backgrounds. I aspire to join a mission-driven organization that produces products with the multi-cultural human experience in mind.
                    </p>
                    
                        <div className="iconslink">
                            <h3>Find me: </h3>
                            <ul>
                                <a href="https://github.com/hsaman4">
                                    <i class="fab fa-github"></i>
                                </a>
                            </ul>
                            <ul>

                                <a href="www.linkedin.com/in/hadeeqa-saman">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About 