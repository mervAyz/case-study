// Navbar.tsx
import React from 'react';
import '../styles/Navbar.scss';
import images from '../assets';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <img src={images?.kesfet} />
                </li>
                <li className="navbar-portal">
                    <img src={images?.portal} />
                </li>
                <li className="navbar-item-">
                    <img src={images?.dahaCuzdan} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
