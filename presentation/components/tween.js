/* eslint-disable react/no-find-dom-node, no-prototype-builtins */
/* A modification of Spectacle's <Appear> that executes gsap animations */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
/* no idea why this is a problem here */
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import findKey from 'lodash.findKey';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
/* eslint-disable no-unused-vars */
import TweenMax from 'gsap';
/* eslint-enable no-unused-vars */
import TimelineMax from 'gsap/TimelineMax';

class Tween extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.tl = new TimelineMax({});
  }

  componentWillMount() {
    const shouldDisableAnimation =
      this.props.route.params.indexOf('export') !== -1 ||
      this.props.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ active: true });
    }
  }

  componentDidMount() {
    const { order } = this.props;
    const node = findDOMNode(this.fragmentRef);
    if (!node.dataset) {
      node.dataset = {};
    }
    node.dataset.order = order;
    this.setInitialTweenState(node);
  }

  componentWillReceiveProps(nextProps) {
    const state = nextProps.fragment;
    const { slide } = this.props.route;
    const fragment = findDOMNode(this.fragmentRef);
    const slideHash = parseInt(this.context.slideHash, 10);
    const key = findKey(state.fragments[slide], {
      id: `${slideHash}-${parseInt(fragment.dataset.fid, 10)}`,
    });

    const shouldDisableAnimation =
      nextProps.route.params.indexOf('export') !== -1 ||
      nextProps.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ active: true });
      return;
    }

    if (
      slide in state.fragments &&
      state.fragments[slide].hasOwnProperty(key)
    ) {
      const active = state.fragments[slide][key].visible;
      this.context.stepCounter.setFragments(state.fragments[slide], slide);
      if (active && !this.state.active) {
        this.playTween();
      }
      if (!active && this.state.active) {
        this.reverseTween();
      }
      this.setState({ active });
    }
  }

  setInitialTweenState(target) {
    this.props.to.forEach((tween, i) => {
      if (i === 0) {
        this.tl.fromTo(target, tween.duration, this.props.from.params, tween.params);
        return;
      }
      this.tl.to(target, tween.duration, tween.params);
    });
    this.tl.pause();
  }

  playTween() {
    this.tl.play();
  }
  reverseTween() {
    this.tl.reverse();
  }

  render() {
    const child = React.Children.only(this.props.children);
    return (
      <div>
        {
          React.cloneElement(child, {
            className: `fragment ${child.props.className}`.trim(),
            style: { ...child.props.style, ...this.props.style },
            ref: (f) => {
              this.fragmentRef = f;
            },
          })
        }
      </div>
    );
  }
}

Tween.defaultProps = {
  style: {},
  order: 0,
};

Tween.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.shape({
    duration: PropTypes.number,
    params: PropTypes.object,
  }).isRequired,
  to: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.number,
    params: PropTypes.object,
  })).isRequired,
  style: PropTypes.object,
  order: PropTypes.number,
  // From spectacle
  route: PropTypes.shape({
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    params: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  fragment: PropTypes.object.isRequired,
};

Tween.contextTypes = {
  export: PropTypes.bool,
  overview: PropTypes.bool,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slideHash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stepCounter: PropTypes.shape({
    setFragments: PropTypes.func,
  }),
};

export default connect(state => state)(Tween);
