import React, { Component } from 'react';

import { Logo } from "./Logo";

export class Hero extends Component {
    constructor (props) {
        super(props);
        this.trackAnimation = this.trackAnimation.bind(this);
        this.trackCollapse = this.trackCollapse.bind(this);
        this.state = {
            intro: true,
            transition: false,
            logoCollapsed: false
        };

    };
    componentDidMount = () => { 
        this.transition = this.transition.bind(this);

    };
    trackAnimation = () => { 
        this.setState({animated: true});
        document.getElementById('nav').classList.add('-top');  
    };
    trackCollapse = () => {
        this.setState({logoCollapsed: true});
    }
    transition = () => { 
        this.setState({
            transition: true
        })
    };
    render = () => { 
        const isIntro = this.props.heroTransition;
        
        return (
            <section id="intro">
                <Logo onAnimated={this.trackAnimation} trigger={this.props.heroTransition} onCollapse={this.trackCollapse}/>
                {(!isIntro && this.logoCollapsed) &&
                    <div className="brain-insides" ref={this.subNav}>
                    <span className="brain-content">
                        <h2>About Me</h2>
                        <p>I’m an energetic, passionate, and fun loving web engineer. I love finding simple solutions to difficult problems and learning new things in the process.</p>
                        <p>With an education in psychology and interactive media, and experience working with a variety of populations and people - from maximum security inmates to children to enterprise level clients - I’ve learned to listen, interpret, analyze, and execute.</p>
                        <p>Below are a few of the skills I’ve gained over the years working as part of a product team as well as a lean creative team and some of the clients I’ve had pleasure to work with.</p>
                    </span>
                    </div>
                }

                
            </section>
        );
    }
}
