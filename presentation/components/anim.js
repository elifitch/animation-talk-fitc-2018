import React from 'react';
import PropTypes from 'prop-types';
import { FancyAppear } from './fancy-appear';
import styled from 'react-emotion';
import { css } from 'emotion';
import IB from './primitives/inline-block';
import { underline } from '../theme';

function Bounce({ children }) {
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
    >
      <IB>{children}</IB>
    </FancyAppear>
  );
}
Bounce.propTypes = {
  children: PropTypes.node.isRequired,
};

function Fade({ children }) {
  return (
    <FancyAppear
      startValue={{
        opacity: 0,
      }}
      endValue={{
        opacity: 1,
      }}
    >
      <IB>{children}</IB>
    </FancyAppear>
  );
}
Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

function Stroke({ children }) {
  return (
    <FancyAppear
      data-foo="bar"
      startValue={{
        backgroundSize: '0% 0.15em',
      }}
      endValue={{
        backgroundSize: '100% 0.15em',
      }}
    >
      <div className={underline}>{children}</div>
    </FancyAppear>
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
