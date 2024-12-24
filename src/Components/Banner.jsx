 import RecycleIcon from '../assets/recycling.tsx'
 import TechIcon from '../assets/technology.tsx'
 import FabricIcon from '../assets/fabric.tsx'
 import '../css/banner.css'
 
 export function Banner(){
    return (
    <section className="section banner">
        <div className="banner-wrap">
            <div className="banner-icons">
                <div className="icon">
                    <RecycleIcon />
                    <span>Reciclado</span>
                </div>
                <div className="icon">
                    <TechIcon />
                    <span>Tecnología</span>
                </div>
                <div className="icon">
                    <FabricIcon />
                    <span>Diseño</span>
                </div>
            </div>
        </div>
    </section>
    )
 };