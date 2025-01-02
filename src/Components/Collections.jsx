import { motion } from 'motion/react';
import '../css/collections.css'
import {collections} from '../data/features.js'
import ArrowIcon from '../assets/arrow.tsx';


export function Collections(){

    const collectionsChart = collections.map((collection) => {
        return (
                <div className= 'collection-chart' key={collection.id} >
                    <div className="collection" href='' target='_blank'>
                        <h2>{collection.title}</h2>
                        <img src={collection.image}/>
                        <button className='collection-btn'>
                            <a href='' target='_blank'>Be part</a>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
        )
    });

    return (
        <section className="collections">
            <h1>COLLECTIONS</h1>
            <motion.div className= "collections-wrap" initial={{top: '200px', opacity: 0}} whileInView={{top:'100px', opacity: 1, ease: 'easeIn'}} transition={{type: 'spring', delay: 0.1, duration: 0.8, visualDuration: 0.3, bounce: .6}}>
                {collectionsChart}
            </motion.div>  
        </section>
    )
};