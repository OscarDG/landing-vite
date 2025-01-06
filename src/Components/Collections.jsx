import { motion } from 'motion/react';
import '../css/collections.css'
import {collections} from '../data/features.js'
import ArrowIcon from '../assets/arrow.tsx';


export function Collections(){

    const collectionsChart = collections.slice(0, 4).map((collection) => {
        return (
                <div className= 'collection__chart' key={collection.id} >
                    <div className="collection__card" href='' target='_blank'>
                        <h3>{collection.title}</h3>
                        <img src={collection.image} alt={`Image of ${collection.title}`}/>
                        <button className='collection__btn'>
                            <a href='' target='_blank' aria-label='Link for the product details'>Be part</a>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
        )
    });

    return (
        <section className="collections">
            <h1>COLLECTIONS</h1>
            <motion.div className= "collections__wrap" initial={{top: '200px', opacity: 0}} whileInView={{top:'100px', opacity: 1, ease: 'ease'}} transition={{type: 'spring', delay: .1, duration: 2, visualDuration: 0.8, bounce: .1}}>
                {collectionsChart}
            </motion.div>
            <div className='collections__banner'>
                <img src='./src/assets/sports.webp' alt="Banner image"/>
            </div>
        </section>
    )
};