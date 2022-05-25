import React from "react"
import './Post.css'
import InterfacePost from "./InterfacePost"

const Post = (props : InterfacePost) => {
    return(
        <article className="container__post">
            <h1>{props.titulo}</h1>
            <div className="flex">
                <img src={props.img} alt = "image not found"></img>
                <p >{props.descripcion}</p>
            </div>
        </article>
    )
}

export default Post;