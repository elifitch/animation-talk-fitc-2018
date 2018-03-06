import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { FancyAppear } from './fancy-appear';

const InlineBlock = styled('div')`
  display: inline-block;
`;

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
      <InlineBlock>{children}</InlineBlock>
    </FancyAppear>
  );
}
Bounce.propTypes = {
  children: PropTypes.node.isRequired,
};

function Fade({ children }) {
  return (
    <FancyAppear>
      <InlineBlock>{children}</InlineBlock>
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
