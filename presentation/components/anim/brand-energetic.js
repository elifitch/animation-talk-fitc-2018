import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function BrandEnergetic(props) {
  const dur = 0.5;
  const zipDur = 0.6;
  const zipSkew = 6;
  const secondSkewDelay = zipDur * 0.58;

  const zipLeft = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '-50%', ease: Power4.easeInOut,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `-${zipSkew}deg`, ease: Power4.easeInOut,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease: Power4.easeInOut,
    }, `-=${secondSkewDelay}`],
  }];

  const zipRight = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '50%', ease: Power4.easeInOut,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `${zipSkew * 2}deg`, ease: Power4.easeInOut,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease: Power4.easeInOut,
    }, `-=${secondSkewDelay}`],
  }];

  const zipCenter = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '0%', ease: Power4.easeInOut,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `-${zipSkew}deg`, ease: Power4.easeInOut,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease: Power4.easeInOut,
    }, `-=${secondSkewDelay}`],
  }];
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              y: '-200%', ease: Power4.easeInOut,
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              opacity: 0, ease: Power4.easeInOut,
            }, `-=${dur * 1.2}`],
          },
        ],
        [
          ...zipLeft,
          ...zipRight,
          ...zipCenter,
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}
BrandEnergetic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BrandEnergetic;
