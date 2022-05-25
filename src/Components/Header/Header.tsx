import './Header.css'
import logo from './Logo.png'
import Boton from '/Proyectos/RareWeb/RareWeb-Front/src/Components/Boton/BotonHeader'

const Header = ()=> { 
    return (<header>
                <nav className="container__header">
                        <div className="container__logo">
                            <img src={logo} alt="logo not found"></img>
                        </div>
                        <div className="container_nav">
                            
                            <ul>
                                <li><Boton href="/" value="INICIO"/></li>
                                <li><Boton href="/Agregar-Post" value="AGREGAR POST"/></li>
                                <li><Boton href="/Eliminar-Post" value="ELIMINAR POST"/></li>
                                <li><Boton href="/Calculadora" value="CALCULADORA"/></li>
                            </ul>
                        </div> 
                    </nav>   
             </header>);
}

export default Header;