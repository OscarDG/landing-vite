import '../css/App.css'
import '../css/DescriptCard.css'
import ArrowIcon from '../assets/arrow'
import { useState } from 'react';

export function StoreProducts({products}){

    const [active, setActive] = useState('')

    const [position, setPosition] = useState(0)

    const handleClickOpen = (index) =>{

        setActive('active')
      
        setPosition(index)

        console.log(position)
    }

    const handleClickClose = () =>{
        setActive('')
    }

const productsList = products.map(

    (product, index) => {
        return(
            <div key={product.id} className='StoreItems__card'>
                <img src={product.image} alt={`${product.name}`}/>
                <span className='ItemsCard__price'>${product.price}</span>
                <h3 className='ItemsCard__name'>{product.name}</h3>
                <p className='ItemsCard__brand'>{product.brand}</p>
                <button className= 'ItemsCard__button' target='_blank' onClick={() => handleClickOpen(index)}>
                    <span>See more</span>
                    <ArrowIcon />
                </button>
            </div>
        )
    }
);

    return(
        <>
            <section className="StoreItems">
                <div className="StoreItems__wrap">
                    {productsList}
                </div>
            </section>
            <aside className={`description__card ${active}`}>
                <div className="card__wrap">
                    <img src= {products[position].image} alt='Bicicleta' className="card__image" />
                    <div className="desc__card__title">
                        <h2 className="card__title__text">{products[position].name}</h2>
                        <p className="desc__card_subtitle">{products[position].brand}</p>
                        <span className="desc__card__price">${products[position].price}</span>
                    </div>
                    <div className="product__description">
                        <p className="product__description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                    <div className="card__btns">
                        <button className="add__btn">ADD TO CART</button>
                        <span className="close__btn" onClick={handleClickClose}>X</span>
                    </div>
                </div>
            </aside>
        </>
    )
};

