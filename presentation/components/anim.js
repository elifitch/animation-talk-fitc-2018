import React from 'react';
import PropTypes from 'prop-types';
import { Appear } from 'spectacle';
import { FancyAppear } from './fancy-appear';
import IB from './primitives/inline-block';
import { underline } from '../theme';

function Bounce(props) {
  return (
    <FancyAppear
      startValue={{
        opacity: 0,
        transform: 'translateY(-1em)',
      }}
      endValue={{
        opacity: 1,
        transform: 'translateY(0em)',
      }}
      easing="bounceOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </FancyAppear>
  );
}
Bounce.propTypes = {
  children: PropTypes.node.isRequired,
};

function Fade(props) {
  return (
    <Appear
      startValue={{
        opacity: 0,
      }}
      endValue={{
        opacity: 1,
      }}
      {...props}
    >
      <IB>{props.children}</IB>
    </Appear>
  );
}
Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

function Stroke(props) {
  return (
    <Appear
      startValue={{
        backgroundSize: '0% 0.15em',
      }}
      endValue={{
        backgroundSize: '100% 0.15em',
      }}
      {...props}
    >
      <div className={underline}>{props.children}</div>
    </Appear>
  );
}
Stroke.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  Bounce,
  Fade,
  Stroke,
};
