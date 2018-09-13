import React, { Component } from 'react';
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax";
import { Route, Link, Switch } from "react-router-dom";
import { InfoSection } from "./InfoSection";
import { Clients } from "./Clients";
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

            
        // window.setTimeout(function() {
        //     document.getElementsByClassName('brain-insides')[0]
        //     console.log(document.getElementsByClassName('brain-content')[0]);
        // }, 1000);
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

                <Switch>
                    <Route path={`${path}`} exact render={(props) => (<InfoSection {...props} image={brain_right} title="humans" />)} />
                    <Route path={`${path}/tech`} render={(props) => (<InfoSection {...props} image={brain_left} title="tech" />)} />
                    <Route path={`${path}/clients`} component={Clients} />
                </Switch>
                {/* <img src={brain_right} /> */}
                {/* <img src={brain_left} /> */}
                
                {/* <p>Throughout my career, I have had the opportunity to work on a number of different projects - for amazing clients and as part of a product team.</p>
                <p>I have made it my mission to learn from each of these opportunities so that I am smarter and more capable when the next one arises.</p>
                <p>Some of the skills I have picked up along the way include:</p> */}
                {/* <div className="psych bg-section">
                    <img src={brain_right} />
                Research methods, data analysis, practical applications of data- Psych major, sociology minor

                Conflict resolution, conflict de-escalation - northern state prison

                Customer service - handy man business

                Leadership, importance of keeping a positive attitude






                    <p>Throughout my career, I have had the opportunity to work on a number of different projects - for amazing clients and as part of a product team.</p>
                    <p>I have made it my mission to learn from each of these opportunities so that I am smarter and more capable when the next one arises.</p>
                    <p>Some of the skills I have picked up along the way include:</p>
                    <div className="skill-list">
                        <p data-open="dev" onClick={this.toggleMenu}>Web Development</p>
                        <ul className="menu" data-menu="dev">
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Javascript
                                <ul>
                                    <li>ES6</li>
                                    <li>jQuery</li>
                                    <li>Vue.js</li>
                                    <li>React</li>
                                    <li>Ember</li>
                                    <li>Node.js</li>
                                </ul>
                            </li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>JSP</li>
                            <li>Firebase</li>
                        </ul>
                        <p>Creative Tools</p>
                        <ul>
                            <li>Adobe Creative Cloud
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>After Effects</li>
                                </ul>
                            </li>
                            <li>Sketch</li>
                        </ul>
                        <p>Office Tools</p>
                        <ul>
                            <li>G Suite
                                <ul>
                                    <li>Google Sheets</li>
                                    <li>Google Docs</li>
                                    <li>Google Forms</li>
                                    <li>Google Slides</li>
                                </ul>
                            </li>
                            <li>Microsoft Office</li>
                                <ul>
                                    <li>Word</li>
                                    <li>Powerpoint</li>
                                    <li>Excel</li>
                                </ul>
                        </ul>
                    </div>
                </div>
                <div className="tech bg-section">
                    Masters degree in Interactive Media

                    Photoshop, Illustrator, AfterEffects

                    Pitchwork, product roadmapping - Student Startup Madness, other competitions

                    HTML, CSS, JS, JSTL
                    JIRA
                    Presenting to clients, scoping our timelines/work estimtes working as part of a creative team, enterprise level clients - Razorfish

                    PHP (CodeIgniter, Laravel), MySQL Vue.JS, Ember 
                    Working as part of a product team- SportsRecruits

                    React, Firebase, Node.js, GSAP, Sketch - Personal projects



                    <p>Throughout my career, I have had the opportunity to work on a number of different projects - for amazing clients and as part of a product team.</p>
                    <p>I have made it my mission to learn from each of these opportunities so that I am smarter and more capable when the next one arises.</p>
                    <p>Some of the skills I have picked up along the way include:</p>
                    <div className="skill-list">
                        <p data-open="dev" onClick={this.toggleMenu}>Web Development</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Javascript
                                <ul>
                                    <li>ES6</li>
                                    <li>jQuery</li>
                                    <li>Vue.js</li>
                                    <li>React</li>
                                    <li>Ember</li>
                                    <li>Node.js</li>
                                </ul>
                            </li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>JSP</li>
                            <li>Firebase</li>
                        </ul>
                        <p>Creative Tools</p>
                        <ul>
                            <li>Adobe Creative Cloud
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>After Effects</li>
                                </ul>
                            </li>
                            <li>Sketch</li>
                        </ul>
                        <p>Office Tools</p>
                        <ul>
                            <li>G Suite
                                <ul>
                                    <li>Google Sheets</li>
                                    <li>Google Docs</li>
                                    <li>Google Forms</li>
                                    <li>Google Slides</li>
                                </ul>
                            </li>
                            <li>Microsoft Office</li>
                                <ul>
                                    <li>Word</li>
                                    <li>Powerpoint</li>
                                    <li>Excel</li>
                                </ul>
                        </ul>
                    </div>
                </div> */}

                {/* <div id="clients">
                    <Client clientName="Development" img={patron} alt="Patrón Spirits Company" clientCopy={
                    <ul className="menu" data-menu="dev">
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>Javascript
                            <ul>
                                <li>ES6</li>
                                <li>jQuery</li>
                                <li>Vue.js</li>
                                <li>React</li>
                                <li>Ember</li>
                                <li>Node.js</li>
                            </ul>
                        </li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>JSP</li>
                        <li>Firebase</li>
        </ul>} />
                    <Client clientName="Creative Tools" img={usaa} alt="USAA" clientCopy="This is a sentence about how great USAA is." />
                    <Client clientName="Personal Experience" img={southwest} alt="Southwest Airlines" clientCopy="This is a sentence about how great Southwest Airlines is." />
                </div> */}
            </div>
        );
    }
}
