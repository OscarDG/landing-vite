import '../css/footer.css'

export function Footer(){

    return(
        <div className="footer-wrap">
        <div className="footerTag-Wrap">
            <span className='footer-tag'></span>
        </div>
            <div className="newsletter">
                <h2>¡Suscríbete a nuestro boletín de noticias!</h2>
                <form className="form">
                    <input type="email" id="newsletter" value="email" />
                        <button type="button">Suscribirte</button>
                </form>
            </div>
            <div className= "contact">
                <h2>Contacto</h2>
                <p>(+57) 317-4048898</p>
                <p>contacto@correo.com</p>
                <p>Calle falsa 123</p>
            </div>
        </div>
    )
};
