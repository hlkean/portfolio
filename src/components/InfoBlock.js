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

    };
    render = () => {
        // Check if there's an image and load proper class
        const isImage = this.props.image;
        const isLinks = this.props.links;
        let classList = 'info-head';
        if(isImage) {
            classList = classList + ' -img';
        }
        return (
            <div className="wrap-item">   
                <div className={classList}>
                    {isImage ? (
                            <img src={`${window.location.origin}${this.props.image}`} alt={this.props.title} /> 
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
                    <ul className="links">
                    {isLinks && 
                        Object.keys(this.props.links).map((key) => {
                           return <li><a href={this.props.links[key]} target="_blank" className="button">{key}</a></li>
                        })
                     }
                     </ul>
                </div>
            </div>
        );
    }
}
