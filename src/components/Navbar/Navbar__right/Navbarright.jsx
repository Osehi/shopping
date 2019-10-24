import React from 'react';
import './Navbarright.css';


function Navbarright(){
    return(
        <div className="Navbarright__wrapper">
            <div className="Navbarright__profile">
                <span className="Navbarright--ps"><i class="far fa-user"></i></span>
                <p>My Profile</p>
            </div>
            <div className="Navbarright__items">
                <span className="Navbarright--ps"><i class="fas fa-shopping-basket"></i></span>
                <p>0 Items</p>
            </div>
            <div className="Navbarright__cost">
                <p>&#36;0.00</p>
            </div>
            <div className="Navbarright__search">
                <i class="fas fa-search"></i>
            </div>
        </div>
    );
};


export default Navbarright;