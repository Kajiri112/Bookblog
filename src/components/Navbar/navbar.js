import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/manga">Manga</NavLink></li>
            <li><NavLink to="/buecher">B&uuml;cher</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" /> 
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/searchicon.png')} alt="Search" />
            </form>

        </div>
    </div>
    )
}
export default Navbar;