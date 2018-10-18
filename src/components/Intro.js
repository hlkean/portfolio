import React, { Component } from 'react';

import { Logo } from "./Logo";

export class Intro extends Component {
    constructor (props) {
        super(props);
        this.trackAnimation = this.trackAnimation.bind(this);
        this.state = {
            animated: false
        };

    };
    componentDidMount = () => { 
        this.transition = this.transition.bind(this);

    };
    trackAnimation = () => { 
        this.setState({animated: true});
        document.getElementById('nav').classList.add('-top');  
    };
    transition = () => { 
        this.setState({
            transition: true
        })
    };
    render = () => { 
        const isAnimated = this.state.animated;
        const contentClasses = ['content'];
        if (isAnimated) {
            contentClasses.push('fade-in');
        }
        return (
            <section id="intro">
                {/* <Logo onAnimated={this.trackAnimation}/> */}
                <div className={contentClasses.join(' ')}>
                    <h1>Henry Kean</h1>
                    <h1>Thinker, tinkerer, developer.</h1>
                </div>
                
            </section>
        );
    }
}
