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
        if(this.props.location.pathname === '/') {
            document.getElementById('nav').classList.remove('-top');
        } else {
            this.setState({top: true});
        }
    };
    transition = () => { 
        this.props.onTransition(this.props.location.pathname);
        if(!this.state.top) {
            this.setState({top: true});
            setTimeout(function() {
                document.getElementsByClassName('page-content')[0].classList.remove('new');
            }, 4000);
        } 
    };

    render = () => {
        return (
            <nav id="nav" className="-top">
                <ul className="-no-list">
                    <li className="-no-list">
                    <NavLink to={`/about`} className="link" onClick={this.transition} activeClassName="-active">About</NavLink>
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
