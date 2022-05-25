import React from "react"
import datosPosts from './DatosPosts/Datos'
import Post from './Post'


const Posts = () => {
    return(
        <div className="container__posts">
        {datosPosts.map(e => <Post titulo={e.titulo.toString()} img={e.img} descripcion={e.descripcion.toString()} />)}      
        </div>
    )
}

export default Posts;