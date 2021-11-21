import React, {useState, useEffect} from 'react';
import "./Post.css";

function PostHooks(props){

    const [likes, countLikes] = useState(props.like);
    const [imagen, setImagen] = useState("");
    const [dias] = useState(Math.floor((new Date() - new Date(props.fecha))/(1000 * 60 * 60 * 24)) + " dias");
    const [autor, setAutor] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [comentarios, SetComentarios] = useState("");

    useEffect(() => {
        setImagen(props.imagen);
        setAutor(props.autor);
        setMensaje(props.mensaje);
        SetComentarios(props.comentarios);
    },[props.imagen, props.autor, props.mensaje, props.comentarios]);

    return (
        <div className="card shadow bg-body rounded">
            <img src={imagen} className="card-img-top img-thumbnails" alt="imagen" />
            <div className="card-body">
                <div className="container-fluid mb-3">
                    <h5 className="d-inline-block float-start card-title text-black-50">{dias}</h5>
                    <div className="d-inline-block" ></div>
                    <button onClick={()=>countLikes(likes + 1)} className="d-inline-block float-end btn btn-danger"><i className="bi bi-suit-heart-fill" /> {likes}</button>
                </div>
                <p className="card-text pt-3 fw-bold">{autor}</p>
                <p className="card-text pt-0">
                    {(mensaje.slice(0,200) + '...')}
                </p>
                <p className="card-text text-black-50">
                    <i className="bi bi-chat-right" /> Comentarios ({comentarios.length})
                </p>
            </div>
        </div>
    );
}

export default PostHooks;