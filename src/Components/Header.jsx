import { useState, useEffect } from 'react';
import CartIcon from '../assets/cart.tsx'
import Lookicon from '../assets/look.tsx'
import '../css/Header.css'

export function Header(){

const [sticky, setSticky] = useState(false)

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 600){
            setSticky(true)
        }else{
            setSticky(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const menuLinks = ['MEN´S', 'WOMEN´S', 'KIDS', 'SHOES', 'EQUIPMENT']

const linksWrap = menuLinks.map((link) => {
    return(
        <li key={menuLinks.indexOf(link)}>
            <a className={`nav-menu--link ${sticky ? 'scrolled' : ''}`} target="_blank">{link}</a>
        </li>
    )
})

    return (
    <header className={`${sticky ? 'scrolled' : ''}`}>
        <nav className="main-nav">
            <ul className="nav-menu">
                {linksWrap}
            </ul>
            <a className={`nav-look ${sticky ? 'scrolled' : ''}`} href="" target="_blank">
                <span>
                   <Lookicon />
                </span>
            </a>
            <a className="nav-store" href="" target="_blank">
                <span>
                    <CartIcon />
                </span>
            </a>
        </nav>
    </header>
    )
};