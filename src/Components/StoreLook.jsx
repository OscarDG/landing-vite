import '../css/Store.css'
import '../css/App.css'
import LookIcon from '../assets/look.tsx'
import CartIcon from '../assets/cart.tsx'

export function StoreLook(){

    return (
        <header className='store__header'>
            <nav className='store__header__nav'>
                <ul className='header__navbar'>
                    <li className='header__navbar__item'>
                        <div className='navbar__lookbar'>
                            <input type='text' name='lookup' placeholder='Buscar' id='lookup'></input>
                        </div>
                        <span className='lookbar__icon'>
                            <LookIcon />
                        </span>
                    </li>
                    <li className='navbar__store'>
                        <button className='navbar__store__button'>
                            <CartIcon width={'30px'} height={'30px'} stroke={'#ffffff'}/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

