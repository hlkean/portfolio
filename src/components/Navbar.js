import React, { Component } from 'react';
import initials from '../images/initials.svg';
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            top: false
        };
    }
    componentDidMount = () => {
        console.log('mount');   
        if(this.props.location.pathname === '/') {
            document.getElementById('nav').classList.remove('-top');
        } else {
            this.setState({top: true});
        }
    };
    transition = () => { 
        if(!this.state.top) {
            document.getElementById('nav').classList.add('-moving');
            document.getElementById('nav').classList.remove('init');
            let self = this;
            setTimeout(function() {
                document.getElementById('nav').classList.add('-top');
                document.getElementsByClassName('page-content')[0].classList.remove('new');
                document.getElementById('nav').classList.remove('-moving');
                self.setState({top: true});
                
            }, 4000, self);
        } 
    };

    render = () => {
        return (
            <nav id="nav" className="-top">
                <ul className="-no-list">
                    <li className="-no-list">
                    <NavLink to={`/work`} className="link" onClick={this.transition} activeClassName="-active">Work</NavLink>
                    </li>
                    {this.state.top &&
                    <li id="nav-logo">
                        <img src={initials} alt="HK"/>
                    </li>
                    }
                    <li className="-no-list">
                    <NavLink to={`/contact`} className="link" onClick={this.transition} activeClassName="-active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
