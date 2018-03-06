import React from 'react';
import PropTypes from 'prop-types';
import { FancyAppear } from './fancy-appear';
import IB from './primitives/inline-block';

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
    <FancyAppear>
      <IB>{children}</IB>
    </FancyAppear>
  );
}
Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  Bounce,
  Fade,
};
