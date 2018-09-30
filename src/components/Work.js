import React, { Component } from 'react';
import {Power2, TimelineMax} from "gsap/TweenMax";
import { NavLink } from "react-router-dom";
import { InfoSection } from "./InfoSection";
import brain_left from '../images/brain_left.svg';
import brain_right from '../images/brain_right.svg';


export class Work extends Component {
    constructor (props) {
        super(props);
        this.subNav = React.createRef();
        this.subNavBlock = React.createRef();
        this.state = {
            animated: false,
        };

    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        // Create variable for sticky nav offset as this changes once the nav is fixed
        this.sticky = this.subNav.current.offsetTop;
    
        let contentWidth = '90%';
        let delayTime = 0;
        if(!document.getElementById('nav').classList.contains('-top')) {
            document.getElementsByClassName('page-content')[0].classList.add('new');
            delayTime = 1.5;
        }
        
        let tl = new TimelineMax({repeat:0, delay:delayTime});
            tl    
                .to(".brain-insides", 1.5, {css: {width: contentWidth, boxShadow: '#000 0 0 12px 0'}, ease:Power2.easeInOut}, 0)
                .set(".brain-content", {display:"block"})
                .set(".brain-insides", {height:'auto'})
                .from(".brain-insides",1,{height:0,immediateRender:false})
                .to(".brain-left", 1.5, {css: {right: '75%'}, ease:Power2.easeInOut}, 0)
                .to(".brain-right", 1.5, {css: {left: '75%'}, ease:Power2.easeInOut}, 0)
                .to(".brain-left", 1, {css: {right: '70%'}, ease:Power2.easeIn}, 1.5)
                .to(".brain-right", 1, {css: {left: '70%'}, ease:Power2.easeIn}, 1.5)
                .from(".brain-content", 1, {autoAlpha:0, y: 100}, 1.5);
    };
    handleScroll = () => {
        if(window.scrollY + 75 > ((this.subNav.current.clientHeight + this.sticky) - (this.subNavBlock.current.clientHeight + 40) - 75)) {
            this.subNav.current.style.position = 'fixed';
            this.subNav.current.style.top = -Math.abs(this.subNav.current.clientHeight - (this.subNavBlock.current.clientHeight + 40) - 75) + 'px';
        } else {
            this.subNav.current.style.position = 'initial';
        };
    };
    scrollToContent = () => {

    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    render () {
        const { path } = this.props.match;
        return (
            <div className="page-content">  
                <div class="hero">
                    <img class="brain-left" src={brain_left} alt=""/>
                    <img class="brain-right" src={brain_right} alt=""/>
                    <div className="brain-insides" ref={this.subNav}>
                        <span className="brain-content">
                            <h2>About Me</h2>
                            <p>I’m an energetic, passionate, and fun loving web engineer. I love finding simple solutions to difficult problems and learning new things in the process.</p>
                            <p>With an education in psychology and interactive media, and experience working with a variety of populations and people - from maximum security inmates to children to enterprise level clients - I’ve learned to listen, interpret, analyze, and execute.</p>
                            <p>Below are a few of the skills I’ve gained over the years working as part of a product team as well as a lean creative team and some of the clients I’ve had pleasure to work with.</p>
                            {/* <p>
                                I believe that every life experience is an opportunity to learn and grow. I've been fortunate enough to have a wide variety of life and working experiences that have helped me to assemble a tool kit to handle almost any situation life (or work) has thrown at me.
                            </p>
                            <p>
                                From working with maximum security inmates, to enterprise level clients - in offices and on mountain tops - I have had the good fortune to live life to it's fullest while learning as many lessons as possible.
                            </p>
                            <p>
                                Below is a list of some of the interpersonal and technical skills and lessons I've learned, and where I learned them.
                            </p>
                            <p>
                                Working with:
                            </p> */}
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
                        </span>
                    </div>
                </div>
                <InfoSection path={path} />
            </div>
        );
    }
}
