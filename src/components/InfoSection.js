import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { InfoBlock } from "./InfoBlock";
import data from '../data.json';

export class InfoSection extends Component {
    render () {
        return (
// {data.clients.map(function (client) {
//                             return <p>{client.patron.title}</p>;
//                         })
//                     }
        <div class="wrap-wrapper">
            <Switch>
                <Route path={`${this.props.path}`} exact render={(props) => (
                    data.humans.map(function (human, index) {
                        return <InfoBlock {...props} key={index} image={human.img} title={human.title} body={human.body} link={human.link} />
                    })
                )} />
                <Route path={`${this.props.path}/tech`} render={(props) => (
                    data.tech.map(function (tech, index) {
                        return <InfoBlock {...props} key={index} image={tech.img} title={tech.title} body={tech.body} link={tech.link} />
                    })
                )}/>
                <Route path={`${this.props.path}/clients`}  render={(props) => (
                    data.clients.map(function (client, index) {
                        return <InfoBlock {...props} key={index} image={client.img} title={client.title} body={client.body} link={client.link}  />
                    })
                )} />
            </Switch>
            </div>
            // <div class="wrap-wrapper">
            //     <div className="client-head">
            //         <h2>{this.props.title}</h2>
            //     </div>
            //     <div className="client-text">                    
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>

            //     </div>
            // </div>
        );
    }
}
