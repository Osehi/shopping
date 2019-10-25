import React from 'react';
import './HeroDisplay.css';

export default function HeroDisplay() {
    return (
        <div className='HeaderDisplay'>
            <div className="HeaderDisplay__description">
                <div className="HeaderDisplay__description__item">
                    <div className="HeaderDisplay__description__item__arrow">
                        <img src={require('../../assets/images/component-arrow.png')} alt="direction"/>
                    </div>
                    <div className="HeaderDisplay__description__item__text">
                        <h2>iPhone X</h2>
                        <p>
                            iPhone X is a premium device.<br/>
                            It is a 4G device, a supersonic browsing speed<br/>
                            Gain confidence; enjoy the latest technology.<br/>
                        </p>
                        <p className='appear'>
                            More
                            <hr/>
                        </p>
                    </div>
                </div>
                <div className="HeaderDisplay__description__item2">
                    <div className="HeaderDisplay__description__item2__image">
                        <img src={require('../../assets/images/component5.png')} alt="iphone"/>
                    </div>
                    <div className="HeaderDisplay__description__item2__arrow">
                        <img src={require('../../assets/images/component6.png')} alt=""/>
                    </div>
                </div>
            </div>
            <div className="HeaderDisplay__image"></div>
        </div>
    )
}
