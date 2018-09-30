import React, { Component } from 'react';
import img from '../images/me.jpg';


export class Contact extends Component {
    constructor (props) {
        super(props);
    };

    componentDidMount = () => {
       
    };

    render () {
        const { path } = this.props.match;
        return (
            <div className="page-content"> 
                <div className="padding-container">
                    <div className="img-hero">
                        <img src={img} alt="Henry Kean" />
                    </div>
                    <div className="contact-body">
                        <h2>Reach Out</h2>
                        <p>I'm always looking for new opportunities to work on great projects with awesome people.</p>
                        <p>Please feel free to reach out by email at <a href="mailto:hlkean@gmail.com">hlkean@gmail.com</a>, or on <a href="https://www.linkedin.com/in/henrykean" target="_blank">LinkedIn</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}
