import React from 'react';
import Header from '../../commons/Header/Header'
import BestSellerList from '../../components/BestSellerList'
import {bestSeller} from '../../data/metadata.json';
// import Navbar from './components/Navbar';

export default function Homepage(){
    return(
        <div className="homepage-container">
            {/* <Navbar /> */}
           <Header/>
           {/* //some other contents before this */}

           <div className='bestseller-container'>
                <h3>best seller</h3>
                <div className='bestseller-navLinks'>
                    <ul>
                    {bestSeller.list.map((list) => (
                        <li key={list}>{list}</li>
                    ))}
                    </ul>
                </div>

                <BestSellerList bestSeller={bestSeller} />
           </div>
        </div>
    );
};


