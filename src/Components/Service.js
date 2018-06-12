import React, {Component} from 'react'

class Service extends Component {
    render() {
        return(
        <div className="col-md-4 mb-5">
            {this.props.children}
            <h4 className="my-4 font-weight-bold">{this.props.heading}</h4>
            <p className="grey-text">{this.props.description}</p>
        </div>
        )
    }
}
export default Service