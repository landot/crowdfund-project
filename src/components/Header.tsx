import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import './Header.css';
import { useState } from 'react';

export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    function handleHamburgerClick() {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className='navbar'>
            <img className='crowdfund-logo' src={logo} alt="logo" />
            <img className='navbar-hamburger' src={hamburger} alt="hamburger menu" onClick={handleHamburgerClick}/>
            <div className={`navbar-links ${showDropdown ? 'show-dropdown': 'hide-dropdown'}`}>
                <nav>About</nav>
                <hr />
                <nav>Discover</nav>
                <hr />
                <nav>Get Started</nav>
            </div>
        </div>
    )
}