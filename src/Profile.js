import React from 'react';
import "./Profile.css";

function CerrarSesion(){
    localStorage.clear();
    window.location.reload(false);
}

function Profile({username, avatar, bio}){
    //bio.history.push('http://localhost:3000/Profile');
    //props.history.push('http://localhost:3000/Profile');
    return (
        <div className="container">
            <div id="tarjeta" className="card mb-3 mt-3 shadow bg-body rounded col-lg-6">
                <div id="img-Joker">
                    <img src={avatar} className="card-img-top dot mt-3" alt="Joker" />
                </div>
                <div className="card-body">
                    <h5 className="card-title center">{username}</h5>
                    <p className="card-text center">{bio}</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={CerrarSesion}>Cerrar Sesión</button>
            </div>
        </div>
    );
}
  
export default Profile;