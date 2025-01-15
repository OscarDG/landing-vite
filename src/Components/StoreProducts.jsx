import '../css/DescriptCard.css'
import '../css/Store.css'
import ArrowIcon from '../assets/arrow'
import { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../hooks/useCart';
import { Cart } from '../Components/Cart.jsx';

export function StoreProducts ({products, state}){

    const {removeFromCart, addToCart, cart, clearCart} = useCart()

    const checkProductsInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    const [active, setActive] = useState('')

    const [position, setPosition] = useState(0)

    const handleClickOpen = (index) =>{

        setActive('active')
      
        setPosition(index)
    }

    const handleClickClose = () =>{
        setActive('')
    }

    console.log(products.length)

const productsList = products.map((product, index) => {
        return(
            <div key={product.id} className='StoreItems__card'>
                <img src={product.image} alt={`${product.name}`}/>
                <span className='ItemsCard__price'>${product.price}</span>
                <div className='ItemsCard__text'>
                    <h3 className='ItemsCard__name'>{product.name}</h3>
                    <p className='ItemsCard__brand'>{product.brand}</p>
                </div>
                <button className= 'ItemsCard__button' target='_blank' onClick={() => handleClickOpen(index)}>
                    <span>See more</span>
                     <ArrowIcon/>
                </button>
            </div>
        )
    }
)



const isProductInCart = checkProductsInCart(products[position])
    return(
        <>
            <section className="StoreItems">
                <div className="StoreItems__wrap">
                 {
                    products.length > 0 ? productsList : <div>No products</div>
                 }
                    
                </div>
                <div className={`Cart__container ${state}`}>
                    <div className='Cart__container__wrap'>
                        <Cart/>
                    </div>
                    <div className='cart__btn__wrap'>
                        <button className= 'Clear__cart__btn' onClick={clearCart}>Clear Cart</button>
                        <button className= 'Checkout__btn'>Checkout</button>
                    </div>
                </div>
            </section>

            <motion.aside className={`description__card ${active}`} style={{display:(active === 'active' ? 'flex' : 'none')}}>
                <div className="card__wrap">
                    <img src= {products[position].image} alt='Bicicleta' className="card__image" />
                    <div className="desc__card__title">
                        <div className='card__text'>
                            <h2 className="card__title__text">{products[position].name}</h2>
                            <p className="desc__card_subtitle">{products[position].brand}</p>
                        </div>
                        <span className="desc__card__price">${products[position].price}</span>
                    </div>
                    <div className="product__description">
                        <p className="product__description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                    <div className="card__btns">
                        <button className={`add__btn${isProductInCart ? '__remove': ''}`} onClick={() => isProductInCart ? removeFromCart(products[position]) : addToCart(products[position])}>
                        {
                            isProductInCart ? <span>Remove from cart</span> : <span>Add to cart</span>
                        }
                        </button>
                        <span className="close__btn" onClick={handleClickClose}>X</span>
                    </div>
                </div>
            </motion.aside>
        </>
    )
};

