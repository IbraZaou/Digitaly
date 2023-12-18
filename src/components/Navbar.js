import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/images/Group 1.png';

const Navbar = () => {
    return (
        <nav>
            <Link to="/"><img src={LOGO} alt="" /></Link>
            <ul>

                <li><Link to="/agence">Agence</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/realisations">Réalisations</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
            <button>EN</button>

        </nav>
    );
};

export default Navbar;