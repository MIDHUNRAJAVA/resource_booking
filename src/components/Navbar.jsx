// src/components/Navbar.js
import React from 'react';
import './Navbar.css';  

const Navbar = ({ title, profileName }) => {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <div className="home-button">
                    <a href="/home">
                        <i className="fa fa-home"></i>
                    </a>
                </div>

                <div className="page-heading">{title}</div>

                <div className="profile-section">
                    <i className="fas fa-user-circle"></i>
                    <span>{profileName}</span>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;

