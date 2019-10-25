import React from 'react';

import './BestSellerCard.css'

export default function BestSellerCard({product, image}) {
    const {name, oldPrice, currentPrice} = product
    
    return (
        <div className='product-card'>
            <div className='product-img'>
                <img src={require(`../assets/images/component${image}.png`)} alt="product_avatar"/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
            </div>
            <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className='product-price'>
                <span className='product-price-tag'>{currentPrice}</span>
                <span className='product-price-tag2'>{oldPrice}</span>
            </div>
        </div>
    )
}
