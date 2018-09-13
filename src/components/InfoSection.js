import React, { Component } from 'react';

export class InfoSection extends Component {
    constructor (props) {
        super(props);

    };
    render () {
        return (
            <div id="client">
                <div className="client-img">
                    <img src={this.props.image} alt="test" />
                </div>
                <div className="client-text">
                    <h2>{this.props.title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi non urna in orci sodales maximus vel et metus.Sed imperdiet lorem nunc, ut pellentesque quam iaculis congue.Donec congue, augue in varius vestibulum, lectus quam pulvinar dolor, eget rutrum metus est vel elit.Phasellus eu augue vitae orci imperdiet rhoncus ac ornare ante.Nam justo est, convallis et neque pretium, elementum venenatis metus.Ut ut erat ac nisi fermentum faucibus nec sagittis nibh.In hac habitasse platea dictumst.Mauris eu mi sed ante ultrices eleifend ut luctus justo.Duis in turpis eu mauris sagittis accumsan non ut nisl.Nunc facilisis consequat tellus, lobortis egestas purus gravida sit amet.Phasellus a enim eu justo aliquet cursus.In orci massa, condimentum vel dolor eu, tempus tristique ex.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nullam tempus ante et eros bibendum, id pharetra massa aliquet.Vestibulum maximus nisl a ex volutpat blandit.Vestibulum hendrerit iaculis ante id pharetra.</p>

                </div>
            </div>
        );
    }
}
