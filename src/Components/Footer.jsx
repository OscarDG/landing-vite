import '../css/footer.css'

export function Footer(){

    return(
        <div className="footer__wrap">
        <div className="footerTag__Wrap">
            <span className='footer__tag'></span>
        </div>
            <div className="newsletter">
                <h2>Subscribe to our newsletter!</h2>
                <form className="newsletter__form">
                    <input type="email" id="newsletter" value="email" />
                        <button type="button">Subscribe</button>
                </form>
            </div>
            <div className= "newsletter__contact">
                <h2>Contact</h2>
                <p>(+57) 317-4048898</p>
                <p>contact@email.com</p>
                <p>False street 123</p>
            </div>
        </div>
    )
};
