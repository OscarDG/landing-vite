import '../css/features.css'
import ArrowIcon from '../assets/arrow.tsx';
import {features} from '../data/features.js'
import { useState, useEffect } from 'react';

export function FeaturesCart() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    
    const featuresChart = features.map((feature, index) => {

        const imageScroll = scrollY * .3;
        
        return(
            <div className="feature__card" key={feature.id}>
                { 
                    index === 0 &&
                        <div className='features__image' style={{transform: `translateY(${(50-(imageScroll))}px)`, transition: 'transform 1s ease-out'}}>
                            <img className= {feature.tag} src={feature.image} alt='break dancer'/>
                        </div>
                }
                { 
                    index === 1 &&
                        <div className='features__image' style={{transform: `translateY(${(100-(imageScroll))}px)`, transition: 'transform 1s ease-out'}}>
                            <img className= {feature.tag} src={feature.image} alt='break dancer'/>
                        </div>
                }
                {
                    index === 2 &&
                        <div className='features__image' style={{transform: `translateY(${(280-(imageScroll))}px)`, transition: 'transform 1s ease-out'}}>
                            <img className= {feature.tag} src={feature.image} alt='break dancer'/>
                        </div>
                }
                <h2>{feature.name}</h2>
                <p>{feature.description}</p>
                <button className='features__btn'>
                    <a href='/' target='_blank' aria-label='Link for features details'>See more</a>
                    <ArrowIcon />
                </button>
            </div>
        )
    });

    return (
        <div className="features__wrap">
            {featuresChart}
        </div>
    )
};