import '../css/features.css'
import ArrowIcon from '../assets/arrow.tsx';
import {features} from '../data/features.js'

export function FeaturesCart() {

    const featuresChart = features.map((feature) => {

        return(
            <div className="feature__card" key={feature.id}>
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