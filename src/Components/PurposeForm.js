import React, { Component } from 'react';

class PurposeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid center">
                <div id="modal" className="col-8 border bg-dark mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                    <div className="row">
                        <div className="col-6">
                            <img src="/img/d.jpg" className="img-fluid m-2" alt="product" style={{height:"115px",width:"200px"}} />
                            <input type="number" placeholder="Enter Number" className="form-control btn-sm m-2" />
                            <input type="text" placeholder="Enter Name" className="form-control btn-sm m-2" />
                            <input type="number" placeholder="Enter Adhar Number" className="form-control btn-sm m-2" />
                            <input type="number" placeholder="Enter DOB" className="form-control btn-sm m-2" />
                        </div>
                        <div className="col-6">
                            <input type="number" placeholder="Enter Id" className="form-control m-2 btn-sm" />
                            <input type="text" placeholder="Enter Name" className="form-control m-2 btn-sm" />
                            <input type="text" placeholder="Enter Gender" className="form-control m-2 btn-sm" />
                            <input type="email" placeholder="Enter Email" className="form-control m-2 btn-sm" />
                            <input type="text" placeholder="Enter purpose" className="form-control m-2 btn-sm" />
                            <input type="number" placeholder="Enter Number" className="form-control m-2 btn-sm" />
                            <input type="number" placeholder="Enter Date" className="form-control m-2 btn-sm" />
                        </div>
                    </div>
                    <button className="btn btn-primary m-2" style={{width:"380px"}}>Delete</button>
                    <div className="row">
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Edit</button>
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Print ID</button>
                    </div>
                    <div className="row">
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Approve</button>
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Reject</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PurposeForm;