import { useState, useEffect } from 'react';
import CartIcon from '../assets/cart.tsx'
import Lookicon from '../assets/look.tsx'
import '../css/Header.css'

export function Header(){

const [sticky, setSticky] = useState(false)

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 450){
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

const [visible, setVisible] = useState('')

const handleClick = () => {
        if (visible === '') {
            setVisible('visible')
        }else{
        setVisible('');
        }
    };

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
            <div className='mobile-nav-button' onClick={handleClick}>
                <div className={`nav-button--wrap ${visible ? 'visible' : ''}`}>
                    <span className={`${visible ? 'visible' : ''}`} id='line1'></span>
                    <span className={`${visible ? 'visible' : ''}`} id='line2'></span>
                    <span className={`${visible ? 'visible' : ''}`} id='line3'></span>
                </div>
            </div>
            <div className={`mobile-menu ${visible ? 'visible' : ''}`}>
                <div className='mobile-menu--wrap'>
                    <ul className='nav-menu--mobile'>
                        {linksWrap}
                    </ul>

                </div>
            </div>
            <ul className="nav-menu">
                {linksWrap}
            </ul>
            <a className={`nav-look ${sticky ? 'scrolled' : ''}`} href="" target="_blank">
                <span>
                   <Lookicon />
                </span>
            </a>
            <a className={`nav-store ${sticky ? 'scrolled' : ''}`}href="" target="_blank">
                <span>
                    <CartIcon />
                </span>
            </a>
        </nav>
    </header>
    )
};