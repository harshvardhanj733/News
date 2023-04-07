// import './Components/Nabvar.css';
import '../index.css';

import React, { Component } from 'react'
import { Link} from "react-router-dom"

export class Navbar extends Component {
    render() {
        // let search = ()=>{
        //     let inp = document.getElementById("inp");
        //     return inp.value;
        // }
        // let {serc} = this.props;
        return (
            <div id='navbar'>
                {/* <BrowserRouter> */}
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            News Monkey
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
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/business">
                                        Business
                                    </Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/entertainment">
                                        Entertainment
                                    </a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/general">
                                        General
                                    </a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/science">
                                        Science
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/health">
                                        Health
                                    </a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/technology">
                                        Technology
                                    </a>
                                </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id={this.props.id}/>
                                <button className="btn btn-outline-success" type="submit" onClick={this.props.newsSearch}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}

export default Navbar
