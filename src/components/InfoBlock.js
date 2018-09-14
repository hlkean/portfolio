import React, { Component } from 'react';
// import data from '../data.json';

export class InfoBlock extends Component {
    constructor (props) {
        super(props);
        // this.trackAnimation = this.trackAnimation.bind(this);
        this.state = {
            animated: false
        };

    };
    componentDidMount = () => { 
        // this.transition = this.transition.bind(this);
        document.getElementById('nav').classList.remove('init');
        document.getElementById('nav').classList.add('-top');

    };
    render () {
        // Check if there's an image and load proper class
        const isImage = this.props.image;
        let classList = 'info-head';
        if(isImage) {
            classList = classList + ' -img';
        }
        return (
            <div className="wrap-item">   
                <div className={classList}>
                    {isImage ? (
                        <img src={`${window.location.origin}${this.props.image}`} alt={this.props.title}/>
                        ) : (
                            <h2>{this.props.title}</h2>
                        )
                    }
                </div>
                <div className="info-body">
                    
                    {/* <p> */}
                    {this.props.body}
                    
                    {/* </p> */}
                </div>
            </div>
        );
    }
}
