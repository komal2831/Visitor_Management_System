import React, { Component } from 'react';
import DetailPage from './DetailPage';

class FrontPage extends Component {

    render() {
        return (
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-7 bg-danger" style={{height:"1200px"}}>
                        <DetailPage />
                    </div>
                    <div className="col-5 bg-success">
                        sjfkej
                    </div>
                </div>

            </div>
        );
    }
}

export default FrontPage;