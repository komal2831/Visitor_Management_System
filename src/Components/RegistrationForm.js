import React, { Component } from 'react';

class RegistrationForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid center">
                <div id="modal" className="col-8 border bg-dark mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                    <img className="b" src="img/10.jpg" className="m-1" style={{width:"380px", height:"100px"}} />
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="First Name" className="form-control btn-sm m-2" />
                            <input type="number" placeholder="Enter Number" className="form-control btn-sm m-2" />
                            <input type="text" placeholder="Purpose of visit" className="form-control btn-sm m-2" />
                            <select className="form-control m-2">
                                <option>Select Identity Proof</option>
                                <option>Adhar Card</option>
                                <option>Pan Card</option>
                                <option>Voter Card</option>
                                <option>Passport</option>
                            </select>
                            <input type="text" placeholder="Entry Date Time" className="form-control btn-sm m-2" />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Last Name" className="form-control btn-sm m-2" />
                            <input type="text" placeholder="Contact Person" className="form-control btn-sm m-2" />
                            <input type="email" placeholder="Email" className="form-control btn-sm m-2" />
                            <input type="number" placeholder="Enter Government ID Number" className="form-control btn-sm m-2" />
                            <input type="text" placeholder="Exit Date Time" className="form-control btn-sm m-2" />
                        </div>
                    </div>
                    <div className="row ">
                        <span className="m-3"><input type="Radio" name="gender" className="m-1" /><span className="text-light">Male</span></span>
                        <span className="m-3"><input type="Radio" name="gender" className="m-1" /><span className="text-light">Female</span></span> 
                        <span className="m-3"><input type="Radio" name="gender" className="m-1" /><span className="text-light">Other</span></span> 
                    </div>
                    <div className="row">
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Reset</button>
                        <button className="btn m-2 btn-primary" style={{ width: "200px" }}>Submit</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default RegistrationForm;