import React, { Component } from 'react';

export class Nope extends Component {
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
            <div class="page-content">
                <h1>Nope</h1>
            </div>
        );
    }
}
