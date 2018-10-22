import React, { Component } from 'react';
import {Power2, TimelineMax} from "gsap/TweenMax";
import { NavLink } from "react-router-dom";

export class HeroContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            nav: true
        };
        this.subNavBlock = React.createRef();
        this.subNav = React.createRef();

    };
    componentDidMount = () => { 
        console.log(this.props.path);       
    //    Animate height with content
    let tl = new TimelineMax({repeat:0, delay:0, onComplete: this.props.onOpen()});
    tl
        .set("#hero-content", {height:'auto', width: 'auto'})
        .to("#hero-content", 1, { marginLeft: 0, marginTop: 0, immediateRender: true, ease: Power2.easeInOut }, 0)
        .from("#hero-content",1,{height:"79px", width: "166px", immediateRender:true, ease:Power2.easeInOut}, 0);
    
        window.addEventListener('scroll', this.handleScroll);
    // Create variable for sticky nav offset as this changes once the nav is fixed
    this.sticky = this.subNav.current.offsetTop;

    };
    handleScroll = () => {
        if (window.scrollY + 75 > ((this.subNav.current.clientHeight + this.sticky) - (this.subNavBlock.current.clientHeight + 40) - 75)) {
            this.subNav.current.style.position = 'fixed';
            this.subNav.current.style.top = -Math.abs(this.subNav.current.clientHeight - (this.subNavBlock.current.clientHeight + 40) - 75) + 'px';
        } else {
            this.subNav.current.style.position = 'initial';
        };
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    render = () => { 
        const isIntro = this.state.intro;
        const path = '/about';
        
        return (
            <div id="hero-content" ref={this.subNav}>
                <div className="body">
                    <h2>About Me</h2>
                    <p>I’m an energetic, passionate, and fun loving web engineer. I love finding simple solutions to difficult problems and learning new things in the process.</p>
                    <p>With an education in psychology and interactive media, and experience working with a variety of populations and people - from maximum security inmates to children to enterprise level clients - I’ve learned to listen, interpret, analyze, and execute.</p>
                    <p>Below are a few of the skills I’ve gained over the years working as part of a product team as well as a lean creative team and some of the clients I’ve had pleasure to work with.</p>
                </div>
                <ul className="tabs" ref={this.subNavBlock}>
                    <li>
                        <span>
                            <NavLink exact to={`${path}`} className="link -dark" activeClassName="-active">People Skills</NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <NavLink to={`${path}/tech`} className="link -dark" activeClassName="-active">Tech Skills</NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <NavLink to={`${path}/clients`} className="link -dark" activeClassName="-active">Clients</NavLink>
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}
