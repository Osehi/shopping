import React from 'react';
import Logo from './Logo/Logo';
import HeaderNav from './HeaderNav/HeaderNav';
import Navbar from '../../components/Navbar/Navbar'


import './Header.css';


function Header(){
    return(
        <div className="Header">
           <Navbar />
            <Logo />
            <HeaderNav />
        </div>
    );
};


export default Header;