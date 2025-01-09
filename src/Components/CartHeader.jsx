import CartIcon from "../assets/cart.tsx"
import ArrowIcon from "../assets/arrow.tsx"
import '../css/Cart.css'

export function CartHeader(){
    return (
        <header className="cart__header">
            <nav className="cart__header__nav">
                <ul className="navbar">
                    <li className="navbar__back">
                        <a href="/landing-vite/STORE" className="navbar__link">Go back</a>
                        <span>
                            <ArrowIcon />
                        </span>
                    </li>
                    <li className="navbar__cart">
                        <button className="cart__button">
                            <CartIcon width={'15px'} height={'15px'} stroke={'#ffffff'}/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}