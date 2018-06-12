import React, {Component} from 'react'
import {Container} from 'mdbreact'

import Service from './Service'

class Features extends Component {
    render() {
        return (
            <Container>
            <div id="best-features" className="text-center">
                <h2 style={{ marginTop: '20px' }}>Services</h2>
                <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                    
                </div>
                </div>

                <div className="row wow fadeInUp">
                <Service
                heading="Website Design"
                description="Your idea is converted into a responsive website design that looks great on all devices.">
                    <i className="fa fa-pencil fa-4x" style={{color: '#272932'}}></i>
                </Service>

                <Service
                heading="Website Development"
                description="That idea is then developed into a functioning website.">
                    <i className="fa fa-code fa-4x" style={{color: '#272932'}}></i>
                </Service>    


                <Service
                heading="App Development"
                description="Reach more users with iOS & Android applications.">
                    <i className="fa fa-thumbs-up fa-4x" style={{color: '#272932'}}></i>
                </Service>
                </div>
            </div>
            </Container>
        )
    }
}
export default Features
