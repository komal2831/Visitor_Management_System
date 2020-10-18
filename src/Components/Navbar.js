import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top" style={{ background: "black" }}>
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <img src="/img/logo.png" ></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn text-info btn-light  nav-link bg-dark m-1"><i className="fa fa-globe text-light p-1" aria-hidden="true"></i>Add Visitor</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}




export default Navbar;