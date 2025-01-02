import '../css/footer.css'

export function Footer(){

    return(
        <div className="footer-wrap">
        <div className="footerTag-Wrap">
            <span className='footer-tag'></span>
        </div>
            <div className="newsletter">
                <h2>Subscribe to our newsletter!</h2>
                <form className="form">
                    <input type="email" id="newsletter" value="email" />
                        <button type="button">Subscribe</button>
                </form>
            </div>
            <div className= "contact">
                <h2>Contact</h2>
                <p>(+57) 317-4048898</p>
                <p>contact@email.com</p>
                <p>False street 123</p>
            </div>
        </div>
    )
};
