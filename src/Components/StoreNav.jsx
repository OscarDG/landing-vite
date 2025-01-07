import { HomeIcon } from "../assets/home.tsx"
import CartIcon from "../assets/cart.tsx"
import { HeartIcon } from "../assets/Heart.tsx"

export function StoreNav(){
    return (
        <section className="storeNav">
            <nav className="storeNav__container">
                <ul className="storeNav__items">
                    <a href="#">
                        <li className="storeNav__items__store">
                            <CartIcon width={'35px'} height={'35px'} stroke={'#F45B69'}/>
                            <span>Store</span>
                        </li>
                    </a>
                    <a href="/landing-vite/">
                        <li className="storeNav__items__home">
                            <HomeIcon width={'30px'} height={'30px'}/>
                            <span>Home</span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="storeNav__items__favs">
                            <HeartIcon width={'30px'} height={'30px'}/>
                            <span>favorites</span>
                        </li>
                    </a>
                </ul>
            </nav>
        </section>
    )
};

