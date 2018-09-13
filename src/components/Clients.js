import React, { Component } from 'react';
import { Client } from "./Client";
import patron from '../images/patron.png';
import usaa from '../images/usaa.png';
import southwest from '../images/southwest.png';

export class Clients extends Component {
    constructor (props) {
        super(props);

    };
   
    render () {
        return (
            <div id="clients">
                <Client clientName="Patrón Spirits Company" img={patron} alt="Patrón Spirits Company" clientCopy="This is a sentence about how great Patrón is." />
                <Client clientName="USAA" img={usaa} alt="USAA" clientCopy="This is a sentence about how great USAA is." />
                <Client clientName="Southwest Airlines" img={southwest} alt="Southwest Airlines" clientCopy="This is a sentence about how great Southwest Airlines is." />
            </div>
        );
    }
}
