import '../css/App.css'
import ArrowIcon from '../assets/arrow'

export function StoreProducts({products}){

const productsList = products.map(
    (product) => {
        return(
            <div key={product.id} className='StoreItems__card'>
                <img src={product.image} alt={`${product.name}`}/>
                <span className='ItemsCard__price'>${product.price}</span>
                <h3 className='ItemsCard__name'>{product.name}</h3>
                <p className='ItemsCard__brand'>{product.brand}</p>
                <a className= 'ItemsCard__button' href='/' target='_blank'>
                    <span>See more</span>
                    <ArrowIcon />
                </a>
            </div>
        )
    }
);

    return(
        <section className="StoreItems">
            <div className="StoreItems__wrap">
                {productsList}
            </div>
        </section>
    )
};

