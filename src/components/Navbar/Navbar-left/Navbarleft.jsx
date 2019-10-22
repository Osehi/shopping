import React from 'react';
import './Navbarleft.css';


function Navbarleft(){
    return(
        <div className="Navbarleft">
            <select name="" id="" className="Navbarleft__one">
                <option value="EN">EN</option>
            </select>
            <select name="" id="" className="Navbarleft__two">
                <option value="USD">USD</option>
            </select>
            <i class="fas fa-search"></i>
        </div>
    );
}

export default Navbarleft;