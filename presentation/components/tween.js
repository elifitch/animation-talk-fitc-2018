/* eslint-disable */
/* A modification of <FancyAppear> that executes gsap animations */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import findKey from 'lodash/findKey';
import { connect } from 'react-redux';
import { VictoryAnimation } from 'victory-core';
require('gsap');

let Tween = class Tween extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.tl = new TimelineMax({});
  }

  componentDidMount() {
    const shouldDisableAnimation =
      this.props.route.params.indexOf('export') !== -1 ||
      this.props.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ active: true });
      return;
    }

    const order = this.props.order || 0;
    const node = findDOMNode(this.fragmentRef);
    if (!node.dataset) {
      node.dataset = {};
    }
    node.dataset.order = order;
    this.setInitialTweenState(node);
  }

  componentWillReceiveProps(nextProps) {
    const state = nextProps.fragment;
    const slide = this.props.route.slide;
    const fragment = findDOMNode(this.fragmentRef);
    const slideHash = parseInt(this.context.slideHash);
    const key = findKey(state.fragments[slide], {
      id: `${slideHash}-${parseInt(fragment.dataset.fid)}`,
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

  playTween() {
    this.tl.play();
  }
  reverseTween() {
    this.tl.reverse();
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

  render() {
    const child = React.Children.only(this.props.children);
    const tweenData = this.state.active ? this.props.endValue : this.props.startValue;
    const transitionDuration = this.props.transitionDuration;
    return (
      <div>
        {React.cloneElement(child, {
            className: `fragment ${child.props.className}`.trim(),
            style: { ...child.props.style, ...this.props.style },
            ref: f => {
              this.fragmentRef = f;
            },
          })}
      </div>
    );
  }
}

Tween.defaultProps = {
  transitionDuration: 300,
  startValue: { opacity: 0 },
  endValue: { opacity: 1 },
  easing: 'quadInOut'
};

Tween.propTypes = {
  children: PropTypes.node,
  fragment: PropTypes.object,
  order: PropTypes.number,
  route: PropTypes.object,
  style: PropTypes.object,
  transitionDuration: PropTypes.number,
  easing: PropTypes.oneOf(['back', 'backIn', 'backOut', 'backInOut', 'bounce', 'bounceIn', 'bounceOut', 'bounceInOut', 'circle', 'circleIn', 'circleOut', 'circleInOut', 'linear', 'linearIn', 'linearOut', 'linearInOut', 'cubic', 'cubicIn', 'cubicOut', 'cubicInOut', 'elastic', 'elasticIn', 'elasticOut', 'elasticInOut', 'exp', 'expIn', 'expOut', 'expInOut', 'poly', 'polyIn', 'polyOut', 'polyInOut', 'quad', 'quadIn', 'quadOut', 'quadInOut', 'sin', 'sinIn', 'sinOut', 'sinInOut']),
  startValue: PropTypes.object,
  endValue: PropTypes.object
};

Tween.contextTypes = {
  export: PropTypes.bool,
  overview: PropTypes.bool,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slideHash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stepCounter: PropTypes.shape({
    setFragments: PropTypes.func
  })
};

Tween = connect(state => state)(Tween);

export { Tween };
