import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

require('gsap');

function BrandCalm(props) {
  const dur = 0.6;

  const tweenParams = {
    blur: 20,
  };
  const tweenBlur = () => {
    const { blur } = tweenParams;
    TweenMax.set('[data-blur-target]', {
      css: {
        filter: `blur(${blur}px)`,
      },
    });
  };
  tweenBlur();
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'to',
            // target: child => child,
            target: () => tweenParams,
            duration: dur,
            args: [{
              // opacity: 1, blur: 0, onUpdate: tweenTheThings, ease: Power2.easeOut,
              blur: 0, onUpdate: tweenBlur, ease: Power2.easeOut,
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              y: '-20%', opacity: 0, ease: Power2.easeOut,
            }, `-=${dur}`],
          },
          // {
          //   method: 'from',
          //   target: child => child,
          //   duration: dur,
          //   args: [{
          //     opacity: 0, ease: Power4.easeInOut,
          //   }, `-=${dur * 1.2}`],
          // },
        ],
      ]}
    >
      <IB data-blur-target>{props.children}</IB>
    </PowerTween>
  );
}
BrandCalm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BrandCalm;
