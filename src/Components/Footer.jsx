import '../css/footer.css'
import FacebookIcon from '../assets/facebook.tsx'
import InstagramIcon from '../assets/instagram.tsx'
import TiktokIcon from '../assets/tiktok.tsx'

export function Footer(){

    return(
        <div className="footer__wrap">
            <div className="newsletter">
                <h2>Subscribe to our newsletter!</h2>
                <form className="newsletter__form">
                    <input type="email" id="newsletter" value="email" />
                        <button type="button">Subscribe</button>
                </form>
            </div>
            <div className= "footer__social">
                <a href= '/' rel='Facebook link' target='_blank' className='footer__social--facebook'><FacebookIcon/></a>
                <a href= '/' rel='Instagram link' target='_blank' className='footer__social--instagram'><InstagramIcon/></a>
                <a href= '/' rel='TikTok link' target='_blank' className='footer__social--tiktok'><TiktokIcon/></a>
            </div>
            <div className='footer__copy'>
                <p>Copyright 2023. All rights reserved.</p>
            </div>
        </div>
    )
};
