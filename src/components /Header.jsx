import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'


const Header = () => {
    return (
        <div className="header-container">
            <div class="title">
            <img src="https://media1.tenor.com/images/cdaa1ee9aa7fcd86a98151fd99b9b78f/tenor.gif?itemid=13610452"></img>
            <div className="text">
                <h1>HS</h1>
                </div>

                
            </div>
            <div className="header-links">
                <div className="about">
                    <a href="#about">About</a>
                </div>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Header 