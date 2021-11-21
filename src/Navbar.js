import React from 'react';

function Navbar({onLogoClick, onProfileClick}) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <div onClick={() => {onLogoClick("Post");}}>
                    <i className="bi bi-lightning-fill d-inline-block align-text-center text-warning"></i>
                    <h5 className="d-inline-block text-white">Twitero</h5>
                </div>
                <i onClick={() => {onProfileClick("Profile");}} className="bi bi-person-circle d-flex text-warning" />
            </div>
        </nav>
    );
  }
  
  export default Navbar;