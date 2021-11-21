import React, {useState} from "react";
import './Login.css';

function Login(props){

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const enviarDatos = event => 
    {
        event.preventDefault();
        const url = "https://three-points.herokuapp.com/api/login";
        const cuerpo = 
        {
            username: user,
            password: pass
        };
        const datos = 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        fetch(url, datos)
            .then( resp => resp.json() )
            .then( resul => localStorage.setItem('id',resul.id) )
            .then( () => props.onLoginComplete(localStorage.getItem('id')) )
            .then( () => props.history.push('http://localhost:3000/'))
            .catch( () => props.onLoginComplete("ERROR") );
    }

    return (
        <div className="container centrado">
            <form className="center col-md-5 col-lg-5 col-xl-3" onSubmit={enviarDatos}>
                <i className="bi bi-lightning-fill mb-4 text-warning"></i>
                
                <h1 className="h3 mb-3 fw-normal">Twitero</h1>

                <input name="username" type="text" className="form-control mb-3" placeholder="usuario" value={user} onChange={event => setUser(event.target.value)} />
                <input name="password" type="password" className="form-control mb-3" placeholder="contraseña" value={pass} onChange={event => setPass(event.target.value)} />
                {
                    props.error === "ERROR" || props.error === "undefined" ? 
                        <label className="error-login mb-3">Usuario o contraseña incorrecto</label>
                    :
                        <div></div>
                }
                <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                <p className="mt-4 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    );
}

export default Login;