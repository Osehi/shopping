import React from 'react'
import BestSellerCard from '../components/BestSellerCard'
import './BestSellerList.css'
export default function BestSellerList({bestSeller}) {
    return (
        <div className='bestseller-list'>
            {bestSeller.data.map((product) => (
                <BestSellerCard product={product} image='-desktop'/>
            ))}
        </div>
    )
}
