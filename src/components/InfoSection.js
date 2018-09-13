import React, { Component } from 'react';

export class InfoSection extends Component {
    constructor (props) {
        super(props);

    };
    render () {
        return (
            <div id="client">
                <div className="client-img">
                    <img src={this.props.image} alt="test" />
                </div>
                <div className="client-text">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        );
    }
}
