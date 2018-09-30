import React, { Component } from 'react';
import {Power2, TimelineMax} from "gsap/TweenMax";

export class Logo extends Component {
    componentDidMount = () => { 
        if(!this.props.loading) {
            document.body.style.backgroundColor = '#000';
            let self = this;
            let tl = new TimelineMax({repeat:0, delay:2.5, onComplete: function() {self.props.onAnimated()}});
            tl
                .to("#Page-1", 1.25, {attr: {"fill-opacity":1}, ease:Power2.easeOut}, 0)
                .to("feOffset", 1.25, {attr: {dx:"6", dy:"2"}, ease:Power2.easeOut}, 0)
                .to("feColorMatrix", 1.25, {attr: {values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"}, ease:Power2.easeOut}, 0)
                .to("#logo p", 2, {css: {opacity: 1}, ease:Power2.easeOut}, 0)
                .to("#logo p", 1, {css: {opacity: 0}, ease:Power2.easeOut}, 2);
    
            document.body.classList.add('loaded');
            document.getElementById('H').classList.add('fade-in');
            document.getElementById('K').classList.add('fade-in');
        }
    };
    
    render = () => { 
        return (
            <div id="logo" className="row -center">
                <p>WEL</p>
                <svg id="initials" width="189px" height="99px" viewBox="0 0 189 99" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <filter x="-4.7%" y="-11.8%" width="115.1%" height="128.2%" filterUnits="objectBoundingBox" id="filter-1">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                            <feMerge>
                                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0">
                        <g id="Desktop-HD" transform="translate(-631.000000, -9.000000)" fill="#ffffff" stroke="#2181bd" strokeWidth="5">
                            <g id="Letters" filter="url(#filter-1)" transform="translate(634.000000, 14.000000)">
                                <polygon id="K" points="82.1911422 42.37 82.1911422 0 108.77296 0 108.77296 36.2173913 138.241492 0 171.198135 0 141.489044 34.8623188 171.799534 84.7536232 140.406527 84.7536232 123.206527 53.7101449 108.77296 65.7826087 108.77296 84.7536232 82.1911422 84.7536232 82.1911422 42.37"></polygon>
                                <polygon id="H" points="82.1911422 42.37 82.1911422 84.7536232 55.8097902 84.7536232 55.8097902 52.6014493 26.5818182 52.6014493 26.5818182 84.7536232 0 84.7536232 0 0 26.5818182 0 26.5818182 30.9202899 55.8097902 30.9202899 55.8097902 0 82.1911422 0 82.1911422 42.37"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
                <p>OME</p>
            </div>
        );
    }
}
