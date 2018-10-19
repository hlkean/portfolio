import React, { Component } from 'react';
import {Power2, TimelineMax} from "gsap/TweenMax";
import {CSSTransition} from "react-transition-group"
import { Logo } from "./Logo";

export class Hero extends Component {
    constructor (props) {
        super(props);
        this.trackAnimation = this.trackAnimation.bind(this);
        this.trackCollapse = this.trackCollapse.bind(this);
        this.state = {
            intro: true,
            transition: false,
            logoCollapsed: false,
            collapse: false
        };
        this.logo = React.createRef();

    };
    componentDidMount = () => { 
        if(this.props.location.pathname !== '/') {
            // // Listen for updates to the props and trigger collapse
            // this.props.history.listen((location, action) => {
            //     if (this.props.test) {
            //         this.logo.current.collapse()
            //     }
            // });
            this.setState({intro: false})
        }
        this.transition = this.transition.bind(this);

    };
    update = (change) => {
        console.log(change);
        if(change) {
            this.logo.current.collapse();
        }
    };

    trackAnimation = () => { 
        this.setState({animated: true});
        document.getElementById('nav').classList.add('-top');  
    };
    trackCollapse = () => {
        // let self = this;
        // let tl = new TimelineMax({repeat:0, delay:0});
        //     tl
        //         .to(".hero-content", 1.25, {attr: {"fill-opacity":1}, ease:Power2.easeOut}, 0)
        this.setState({intro: false});
    }
    transition = () => { 
        this.setState({
            transition: true
        })
    };
    render = () => { 
        const isIntro = this.state.intro;
        
        return (
            <section id="intro">
                {isIntro ? (
                    <CSSTransition timeout={1000} classNames="logo" in={isIntro}>
                        <Logo onAnimated={this.trackAnimation} ref={this.logo} collapse={this.state.collapse} onCollapse={this.trackCollapse}/>
                    </CSSTransition>
                ) : (
                    // <div className="info-container">
                    <span className="hero-content">
                        <h2>About Me</h2>
                        <p>I’m an energetic, passionate, and fun loving web engineer. I love finding simple solutions to difficult problems and learning new things in the process.</p>
                        <p>With an education in psychology and interactive media, and experience working with a variety of populations and people - from maximum security inmates to children to enterprise level clients - I’ve learned to listen, interpret, analyze, and execute.</p>
                        <p>Below are a few of the skills I’ve gained over the years working as part of a product team as well as a lean creative team and some of the clients I’ve had pleasure to work with.</p>
                    </span>
                    // </div>
                )}

                
            </section>
        );
    }
}
