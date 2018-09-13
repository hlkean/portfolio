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
        document.getElementById('nav').classList.add('init');  
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
                <Logo onAnimated={this.trackAnimation}/>
                <div className={contentClasses.join(' ')}>
                    <h1>Henry Kean</h1>
                    <h1>Creative-minded developer and self-starter.</h1>
                    
                    {/* <h1>My name's Henry and I'm a Creative Web Developer and idea guy!</h1>
                    <p>I have a deep love for great design, brainstorming award winning projects and concepts, and really bad puns.</p>
                    <p>I've worked for clients and as part of a product team; I've even worked with prison inmates (helping with personal development more than web development... puns).</p>
                    <p>Please feel free to take a look around at some of my previous projects. I'm always looking for new opportunities to work and collaborate with others or talk about what I'm currently working on. If something strikes your fancy, drop me a line!</p> */}
                </div>
                
            </section>
        );
    }
}
