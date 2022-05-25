import './Footer.css'
import Boton from '/Proyectos/RareWeb/RareWeb-Front/src/Components/Boton/Boton'

const Footer = () => {
    return(
        <div className="footer">
            <p className="copyright"><b>Facundo Acevedo--COPYRIGHT 2022</b></p>
            <section>
                <Boton href='#header' value='IR AL PRINCIPIO'/>
                <Boton href='mailto:acevedofacundo410@gmail.com' value='CONTACTO'/>
            </section>
        </div>
    )
}

export default Footer;