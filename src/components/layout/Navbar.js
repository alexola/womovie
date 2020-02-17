import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link className="navbar-brand" to="/">
                Woomovie
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="https://www.imdb.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-imdb fa-3x" id="imdb-logo"></i> 
                </a>
            </li>
            <li className="nav-item">
                    <i className="fa fa-rocket fa-3x" id="rocket-logo"></i>
            </li>
            </ul>
        </div>
        </nav>
    </div>
    )
}

export default Navbar
