import '../css/Store.css'
import {Filter} from '../Components/Filter.jsx'

export function StoreCategories(){
    return(
        <section className='categories'>
            <div className='categories__wrap'>
                <Filter />
            </div>
        </section>
    )
};

