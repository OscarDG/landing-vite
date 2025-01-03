import { useState, useEffect } from 'react'
import FacebookIcon from '../assets/facebook.tsx'
import InstagramIcon from '../assets/instagram.tsx'
import TiktokIcon from '../assets/tiktok.tsx'
import '../css/aside.css'

export function Aside (){

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400){
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

    return(
<aside className="social__aside">
            <div className="social__wrap">
                <ul className={`social__wrap__list ${sticky ? 'social__wrap__list--scrolled' : ''}`}>
                    <li>
                        <a href="" target="_blank" aria-label='link for social networks'>
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <TiktokIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
};