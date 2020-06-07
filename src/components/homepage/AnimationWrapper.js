import React from "react";
import * as VANTA from "vanta";
import DOTS from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
//mport BIRDS from 'vanta/dist/vanta.birds.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class AnimationWrapper extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = DOTS({
      el: this.vantaRef.current,
      THREE: { ...THREE },
      showLines: false,
      color: "#628cf0",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      size: 0.20,
      speed: 0.80,
      scaleMobile: 1.00,
      shininess: 93.00,
      waveHeight: 40.00,
      waveSpeed: 0.65,
      zoom: 0.65
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return <div ref={this.vantaRef}>{this.props.children}</div>;
  }
}
export default AnimationWrapper;
