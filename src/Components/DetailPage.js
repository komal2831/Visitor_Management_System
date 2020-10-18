import React, { Component } from 'react';
import './App.css'
class DetailPage extends Component {
    
    render() { 
        return ( 
            <div className="container-fluid padding">
                <div className="row padding p-2" style={{ marginTop: "40px",border:"2px dotted yellow" }}>
                    <div className="col-lg-5">
                        {/* eslint-disable-next-line */}
                        <img src="img/15.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-12 col-lg-5 text-light">
                        <input type="text" className="form-control btn-sm p-1 m-1 col-8" placeholder="Enter Name" />
                        <input type="emil" className="form-control btn-sm p-1 m-1 col-8" placeholder="Enter Email"/>
                        <input type="number" className="form-control p-1 btn-sm m-1 col-8" placeholder="Enter Number"/>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" class="btn btn-primary btn-circle btn-xl p-4 m-4">Approved</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DetailPage;