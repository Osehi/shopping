import React from 'react';

import './BestSellerCard.css'

export default function BestSellerCard({product, image}) {
    const {name, oldPrice, currentPrice} = product
    
    return (
        <div className='product-card'>
            <img src={require(`../assets/images/component${image}.png`)} alt="product_avatar"/>
            <h4>{name}</h4>
            <div>star</div>
            <div className='product-price'>
                <span>{currentPrice}</span>
                <span>{oldPrice}</span>
            </div>
        </div>
    )
}
