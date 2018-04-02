import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import Pic from './pic';

class Pointer extends React.Component {
  render() {
    const {
      position,
      rotation,
      size,
      animated,
      animationDelay,
    } = this.props;
    const PositionWrapper = styled('div')(() => ({
      position: 'absolute',
      top: position.top,
      left: position.left,
      width: `${size}`,
    }));
    const RotationWrapper = styled('div')(() => ({
      transform: `rotate(${rotation}deg)`,
    }));
    const pointerBob = keyframes`
      0%, 100% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(20%);
      }
    `;
    const AnimationWrapper = styled('div')(() => {
      if (animated) {
        return {
          animation: `${pointerBob} 1s ${animationDelay}ms infinite`,
        };
      }
      return {};
    });
    const pointerSrc = require('../../assets/pointer.png');
    return (
      <PositionWrapper>
        <RotationWrapper>
          <AnimationWrapper>
            <img src={pointerSrc} style={{ width: '100%', maxWidth: 'none', minWidth: 'none' }} alt="" />
          </AnimationWrapper>
        </RotationWrapper>
      </PositionWrapper>
    );
  }
}

Pointer.defaultProps = {
  animated: false,
  size: '200px',
  animationDelay: 0,
};

Pointer.propTypes = {
  position: PropTypes.shape({ top: PropTypes.string, left: PropTypes.string }).isRequired,
  rotation: PropTypes.number.isRequired,
  size: PropTypes.string,
  animated: PropTypes.bool,
  animationDelay: PropTypes.number,
};

export default Pointer;
