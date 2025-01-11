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
                </ul>
            </nav>
        </header>
    )
}