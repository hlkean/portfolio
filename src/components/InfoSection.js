import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { InfoBlock } from "./InfoBlock";
import data from '../data.json';

export class InfoSection extends Component {
    render () {
        return (
        <div className="wrap-wrapper">
            <Switch>
                <Route path={`${this.props.path}`} exact render={(props) => (
                    data.humans.map(function (human, index) {
                        return <InfoBlock {...props} key={index} image={human.img} title={human.title} body={human.body} link={human.link} icon={human.icon}/>
                    })
                )} />
                <Route path={`${this.props.path}/tech`} render={(props) => (
                    data.tech.map(function (tech, index) {
                        return <InfoBlock {...props} key={index} image={tech.img} title={tech.title} body={tech.body} link={tech.link} icon={tech.icon}/>
                    })
                )}/>
                <Route path={`${this.props.path}/clients`}  render={(props) => (
                    data.clients.map(function (client, index) {
                        return <InfoBlock {...props} key={index} image={client.img} title={client.title} body={client.body} links={client.links}/>
                    })
                )} />
            </Switch>
        </div>
        );
    }
}
