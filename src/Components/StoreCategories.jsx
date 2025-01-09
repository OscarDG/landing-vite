import '../css/Store.css'
import {Filter} from '../Components/Filter.jsx'

export function StoreCategories({filters}){
    return(
        <section className='categories'>
            <div className='categories__wrap'>
                <Filter changeFilters={filters}/>
            </div>
        </section>
    )
};

