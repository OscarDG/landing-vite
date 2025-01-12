import '../css/Store.css'
import '../css/App.css'
import LookIcon from '../assets/look.tsx'
import CartIcon from '../assets/cart.tsx'
import { useFilter } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'

export function StoreLook({state, setState}){

    const {cart} = useCart()

    const {setFilters} = useFilter()

    const handleChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            name: event.target.value
        }))
    }


    const handleState = () =>{
        if(state === ''){
            setState('active')
        }else{
            setState('')
        }
    }

    return (
        <header className='store__header'>
            <nav className='store__header__nav'>
                <ul className='header__navbar'>
                    <li className='header__navbar__item'>
                        <div className='navbar__lookbar'>
                            <input type='text' name='lookup' placeholder='Buscar' id='lookup' onChange={handleChange}></input>
                        </div>
                        <span className='lookbar__icon'>
                            <LookIcon />
                        </span>
                    </li>
                    <li className='navbar__store'>
                     {
                        cart.length > 0 ? <span>{cart.length}</span> : '' 
                     }
                        <button className='navbar__store__button' onClick={handleState}>
                            <CartIcon width={'30px'} height={'30px'} stroke={'#ffffff'}/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

