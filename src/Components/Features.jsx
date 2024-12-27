import { FeaturesCart } from '../Components/FeaturesCart.jsx'
import { motion } from 'motion/react';
import '../css/features.css'

export function Features (){

    const cardVariants = {
        offScreen: {
            opacity: 0,
            x: 0
        },
        onScreen: {
            opacity: 1,
            x: 25,
            transition:{
                duration: 1,
                delay: .5,
                bounce: 0.4,
                ease: "linear"
            }
        }
    };

    return (
    <section className="features">
        <motion.div className='features-image' variants={cardVariants} initial="offScreen" whileInView= "onScreen">
                <img src='../assets/break-dancer-doing.png' alt='break dancer'/>
        </motion.div>
        <FeaturesCart />
    </section>
    )
};
