import React, { Component } from 'react';
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax";
import { Link } from "react-router-dom";
import { InfoSection } from "./InfoSection";
import brain_left from '../images/brain_left.svg';
import brain_right from '../images/brain_right.svg';


export class Work extends Component {
    constructor (props) {
        super(props);
        this.subNav = React.createRef();
        this.subNavBlock = React.createRef();
        // this.trackAnimation = this.trackAnimation.bind(this);
        this.state = {
            animated: false,
        };

    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        // Create variable for sticky nav offset as this changes once the nav is fixed
        this.sticky = this.subNav.current.offsetTop;
        
        document.getElementById('nav').classList.remove('init');
        document.getElementById('nav').classList.add('-top');
        let contentWidth = '50%';
        if(window.innerWidth < 768) {
            contentWidth = '100%';
        }
        
        let tl = new TimelineMax({repeat:0, delay:3});
            tl    
                .to(".brain-insides", 1.5, {css: {width: contentWidth, boxShadow: '#000 0 0 12px 0'}, ease:Power2.easeInOut}, 0)
                .set(".brain-content", {display:"block"})
                .set(".brain-insides", {height:'auto'})
                .from(".brain-insides",1,{height:0,immediateRender:false})
                .to(".brain-left", 1.5, {css: {right: '78%'}, ease:Power2.easeInOut}, 0)
                .to(".brain-right", 1.5, {css: {left: '78%'}, ease:Power2.easeInOut}, 0)
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

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    render () {
        const { path } = this.props.match;
        return (
            <div className="page-content">  
                <h1>Work</h1>
                <div class="hero">
                    <img class="brain-left" src={brain_left} />
                    <img class="brain-right" src={brain_right} />
                    <div className="brain-insides" ref={this.subNav}>
                        <span className="brain-content">
                            <h2>Every experience is an opportunity to learn...</h2>
                            <p>
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
                            </p>
                            <ul className="tabs" ref={this.subNavBlock}>
                                <li>
                                <Link to={`${path}`}>People Skills</Link>
                                </li>
                                <li>
                                <Link to={`${path}/tech`}>Tech Skills</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/clients`}>Clients</Link>
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
