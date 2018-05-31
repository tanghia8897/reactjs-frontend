import React, { Component } from 'react';

import {  Link,NavLink  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                    {/* <a className="navbar-brand js-scroll-trigger" href="index.html">Start Bootstrap</a> */}
                    <Link className="navbar-brand js-scroll-trigger" to="/Home">Start Bootstrap</Link>
                    
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="tintuc.html">Tin Tức</a> */}
                            <NavLink  className="nav-link js-scroll-trigger" to="/Home">HOME</NavLink >
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="tintuc.html">Tin Tức</a> */}
                            <NavLink  className="nav-link js-scroll-trigger" to="/News">NEWS</NavLink >
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                            <NavLink  className="nav-link js-scroll-trigger" to="/news-detail">Features</NavLink >
                        </li> */}
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#contact">Contact</a> */}
                            <NavLink  className="nav-link js-scroll-trigger" to="/Contact">Contact</NavLink >
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;