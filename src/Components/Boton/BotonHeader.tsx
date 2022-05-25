import './Boton.css'
import {Link} from 'react-router-dom'
import Props from './IProps'


const BotonHeader = (props : Props) => {
    return (
        <Link className="select" to={props.href}>{props.value}</Link>
    )
}


export default BotonHeader;
