import React, { Component } from 'react';
import initials from '../images/initials.svg';

export class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            top: false
        };
    }
    componentDidMount = () => {
        if(this.props.location.pathname === '/') {
            document.getElementById('nav').style.top = '100vh';
        } else {
            this.setState({top: true});
        }
    };
    componentDidUpdate = (prevProps) => {
        // let self = this;
        // window.setTimeout('500', function(self) {
        //     console.log(self.props.location.pathname !== prevProps.location.pathname);
        //     if (self.props.location.pathname !== prevProps.location.pathname) {
        //         self.onRouteChanged();
        //     }
        // });
        
        // componentDidUpdate(prevProps) {
        //     if (this.props.location !== prevProps.location) {
        //       this.onRouteChanged();
        //     }
        //   }
    };
    transition = () => { 
        if(!this.top) {
            document.getElementById('nav').classList.add('-top');
            this.setState({top: true});
        } else {
            document.getElementById('nav').classList.remove('-top');
            this.setState({top: false});
        }
    };

    render = () => {
        return (
            <nav id="nav" >
                <ul className="-no-list">
                    <li className="-no-list">
                        {/* <span onClick={this.transition}>Work</span> */}
                        <a href="/work" onClick={this.transition} >Work</a>                        
                        {/* <ul className="hide">
                            <li className="-no-list"><img src="#" alt="Patrón Spirits Company" /></li>
                            <li className="-no-list"><a href="#"><img src="#" alt="USAA" /></a></li>
                            <li className="-no-list"><a href="#"><img src="#" alt="Stephens Access" /></a></li>
                            <li className="-no-list"><a href="#"><img src="#" alt="Southwest Airlines" /></a></li>
                        </ul> */}
                    </li>
                    {this.state.top &&
                    <li id="nav-logo">
                        <img src={initials} alt="HK"/>
                    </li>
                    }
                    <li className="-no-list">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
