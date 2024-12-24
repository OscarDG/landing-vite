import '../css/collections.css'
import {collections} from '../data/features.js'

export function Collections(){

    const collectionsChart = collections.map((collection) => {
        return (
            <a href="" target="_blank" key={collection.id}>
                <div className="collection">
                    <h2>{collection.title}</h2>
                </div>
            </a>
        )
    });

    return (
        <section className="collections">
            <h1>COLECCIONES</h1>
            <div className="collections-wrap">
                {collectionsChart}
            </div>
        </section>
    )
};