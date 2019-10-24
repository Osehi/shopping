import React from 'react';
import {Link} from 'react-router-dom'


export default function Products(){
    return(
        <div className="product-container">
            <h2>this is my product page</h2>
            <Link to='/'> click me to go back</Link>
        </div>
    );
};


