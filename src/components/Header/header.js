import React from 'react';
import'./header.css';

const Header = (props) => (
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Manga Datenbank</a>
        </nav>
        <div className="socialMedia">
            <a href="https://www.instagram.com/kajiji/"><img src={require('../../assets/instaicon.png')} ></img></a>
            <a href="#"><img src={require('../../assets/fbicon.png')} ></img></a>
            <a href="#"><img src={require('../../assets/mailicon.png')} ></img></a>
        </div>
     
    </header>
);
export default Header;