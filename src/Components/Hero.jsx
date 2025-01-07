import '../css/hero.css'

export function Hero(){

    return (
        <section className= "mainhero">
            <div className= "mainhero__wrap">
                <h1>EXPLORE</h1>
            </div>
            <div className='cta__hero'>
                <button className='cta__hero__button'>
                    <a href='/landing-vite/STORE'>Watch products</a>
                </button>
            </div>
        </section>
    )
}