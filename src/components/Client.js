import React, { Component } from 'react';

export class Client extends Component {
    constructor (props) {
        super(props);
        // this.trackAnimation = this.trackAnimation.bind(this);
        this.state = {
            animated: false
        };

    };
    componentDidMount = () => { 
        // this.transition = this.transition.bind(this);
        document.getElementById('nav').classList.remove('init');
        document.getElementById('nav').classList.add('-top');

    };
    render () {
        return (
            <div id="client">
                <div className="client-img">
                    <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div className="client-text">
                    <h2>{this.props.clientName}</h2>
                    {/* <p> */}
                    {this.props.clientCopy}
                    
                    {/* </p> */}
                </div>
            </div>
        );
    }
}
