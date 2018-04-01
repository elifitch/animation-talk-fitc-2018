import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Pic from './pic';

class Pointer extends React.Component {
  render() {
    const {
      position,
      rotation,
      size,
      animated,
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
    const AnimationWrapper = styled('div')(() => {
      if (animated) {
        return {
          animation: 'pointer-bob 1s infinite',
          '@keyframes: pointer-bob': {
            from: 'transform: translateY(0%)',
            to: 'transform: translateY(20%)',
          },
        };
      }
      return {};
    });
    return (
      <PositionWrapper>
        <RotationWrapper>
          <AnimationWrapper>
            <Pic src="pointer.png" style={{ width: '100%', maxWidth: 'none', minWidth: 'none' }} />
          </AnimationWrapper>
        </RotationWrapper>
      </PositionWrapper>
    );
  }
}

Pointer.defaultProps = {
  animated: false,
  size: '200px',
};

Pointer.propTypes = {
  position: PropTypes.shape({ top: PropTypes.string, left: PropTypes.string }).isRequired,
  rotation: PropTypes.number.isRequired,
  size: PropTypes.string,
  animated: PropTypes.bool,
};

export default Pointer;
