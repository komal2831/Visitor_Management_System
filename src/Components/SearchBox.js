import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top p-3" style={{ background: "black" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn-sm text-info btn-light  nav-link bg-dark m-1" style={{ width: "300px" }}><i className="fa fa-globe text-light p-1" aria-hidden="true"></i>Search</button>
                            </li>
                            <li className="nav-item active">
                                <input className="form-control nav-link m-1" placeholder="Search" style={{ width: "660px" }}></input>
                            </li>
                            
                            <li className="nav-item">
                                <button className="btn text-info btn-light  nav-link bg-dark m-1 " style={{ width: "300px" }}>Clear</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}




export default SearchBox;