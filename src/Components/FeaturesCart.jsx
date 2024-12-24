import '../css/features.css'
import PlusIcon from '../assets/plus.tsx'
import {features} from '../data/features.js'

export function FeaturesCart() {
    const featuresChart = features.map((feature) => {
        return(
            <div className="feature-card" key={feature.id}>
                <h2>{feature.name}</h2>
                <p>{feature.description}</p>
                <button className="features-button">
                    More
                    <PlusIcon />
                </button>
            </div>
        )
    });

    return (
        <div className="features-wrap">
            {featuresChart}
        </div>
    )
};