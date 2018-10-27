import React, { Component } from 'react';
import { Logo } from "./Logo";
import {HeroContent} from "./HeroContent";
import { Intro } from "./Intro";

export class Hero extends Component {
    constructor (props) {
        super(props);
        this.trackAnimation = this.trackAnimation.bind(this);
        this.trackCollapse = this.trackCollapse.bind(this);
        this.state = {
            intro: true,
            transition: false,
            logoCollapsed: false,
            collapse: false,
            contentIn: false

        };
        this.logo = React.createRef();

    };
    componentDidMount = () => { 
        this.hideLogo = this.hideLogo.bind(this);
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
        document.querySelector('.content').classList.add('fade-out');
        if(change) {
            this.logo.current.collapse();
        }
    };
    hideLogo = () => {
        this.setState({contentIn: true});
    };
    trackAnimation = () => { 
        this.setState({animated: true});
        document.getElementById('nav').classList.add('-top');  
        document.querySelector('.content').classList.add('fade-in');
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
                
                {!this.state.contentIn &&
                <div>
                    <Logo onAnimated={this.trackAnimation} location={this.props.location.pathname} ref={this.logo} collapse={this.state.collapse} onCollapse={this.trackCollapse}/>
                    <div className="content">
                        <h1>Henry Kean</h1>
                        <h1>Thinker, tinkerer, developer.</h1>
                    </div>   
                </div>
                }
                {!isIntro &&    
                    <HeroContent onOpen={this.hideLogo} location={this.props.location.pathname}/>
                }
                
            </section>
        );
    }
}
