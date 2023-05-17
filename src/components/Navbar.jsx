// import './Components/Nabvar.css';
import '../index.css';

import React, { Component } from 'react'
import { Link} from "react-router-dom"

export class Navbar extends Component {
    render() {
        const {newsSearch} = this.props;
        return (
            <div id='navbar'>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            News App
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/health">
                                        Health
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/technology">
                                        Technology
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">
                                        Business
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/entertainment">
                                        Entertainment
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="inp"/>
                                <button className="btn btn-outline-success" type="submit" onClick={newsSearch}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
