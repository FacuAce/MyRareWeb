import './Boton.css'
import Props from './IProps'

const Boton = (props : Props) => {
    return (
        <a className="select" href={props.href}>{props.value}</a>
    )
}

export default Boton;