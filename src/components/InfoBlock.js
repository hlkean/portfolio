import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class InfoBlock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            animated: false
        };

    };
    componentDidMount = () => { 
        document.getElementById('nav').classList.remove('init');
        document.getElementById('nav').classList.add('-top');

    };
    render = () => {
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
                            <img src={`${window.location.origin}${this.props.image}`} alt={this.props.title} /> 
                        //  ) : (
                        //     <h2>{this.props.title}</h2>
                        // )
                        ) : (
                            <FontAwesomeIcon icon={this.props.icon} size="3x" className="primary"/>
                        )
                    }
                </div>
                <div className="info-body">
                    <h2>{this.props.title}</h2>
                    <hr/>
                    <p>
                        {this.props.body}
                    </p>
                </div>
            </div>
        );
    }
}
