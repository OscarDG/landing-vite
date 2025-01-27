import { useState, useEffect } from 'react';
import CartIcon from '../assets/cart.tsx'
import '../css/Header.css'

export function Header(){

const [sticky, setSticky] = useState(false)

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 580){
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

const menuLinks = ['MEN´S', 'WOMEN´S', 'KIDS','EQUIPMENT', 'STORE']

const linksWrap = menuLinks.map((link) => {
    return(
        <li key={menuLinks.indexOf(link)}>
            <a className={`navmenu__link ${sticky ? 'navmenu__link--scrolled' : ''}`} href={`/landing-vite/${link}`}>{link}</a>
        </li>
    )
})

    return (
    <header className={`${sticky ? 'header--scrolled' : ''}`}>
        <nav className="mainNav">
            <div className='mobileNav__button' onClick={handleClick}>
                <div className= 'navButton__wrap'>
                    <span className={`${visible ? 'visible' : ''}`} id='line1'></span>
                    <span className={`${visible ? 'visible' : ''}`} id='line2'></span>
                    <span className={`${visible ? 'visible' : ''}`} id='line3'></span>
                </div>
            </div>
            <div className={`mobileMenu ${visible ? 'mobileMenu--visible' : ''}`}>
                <div className='mobileMenu__wrap'>
                    <ul className='navMenu__mobile'>
                        {linksWrap}
                    </ul>

                </div>
            </div>
            <ul className="navMenu">
                {linksWrap}
            </ul>
            <a className={`navstore ${sticky ? 'navstore--scrolled' : ''}`} href="/landing-vite/STORE">
                <span>
                    <CartIcon width={'30px'} height={'30px'} stroke={'#ffffff'}/>
                </span>
            </a>
        </nav>
    </header>
    )
};