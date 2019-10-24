import React from 'react';

import './Navbar.css';
import NavbarLeft from './Navbar-left/Navbarleft';
import Navbarright from './Navbar__right/Navbarright'

function Navbar(){
    return(
        <div className="Navbar">
            <NavbarLeft />
            <Navbarright />
        </div>
    );
};



export default Navbar