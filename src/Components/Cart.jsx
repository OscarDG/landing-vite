import '../css/Cart.css'
import { useCart } from "../hooks/useCart.js"
import { CartHeader } from "./CartHeader.jsx"

export function Cart(){

    const {cart, clearCart, addToCart, removeFromCart} = useCart()

    function CartItem ({name, price, brand, image, quantity, addToCart, removeFromCart}){
            return (
                <li className="cart__item">
                    <img src={image} alt={name} />
                    <h2 className='cart__item__title'>{name}</h2>
                    <p className='card__item__brand'>{brand}</p>
                    <p className='card__item__price'>Total: ${price * quantity}</p>
                    <span>{quantity}</span>
                    <button className='card__item__remove' onClick={removeFromCart}>-</button>
                    <button className='card__item__add' onClick={addToCart}>+</button>
                </li>
            )
        }
        
    return (
        <>
            <CartHeader />
            <section className="Cart__items__added">
            {
                cart.length >= 1 ?
                <ul className='Cart__added__list'>
                {cart.map(product => (
                    <CartItem 
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    removeFromCart={() => removeFromCart(product)}
                    {...product}
                    />
                ))}
                </ul>
                :
                <div className='cart__empty'>
                    <p >Your cart is empty</p>
                </div>
            }
            </section>
        </>
    )
}