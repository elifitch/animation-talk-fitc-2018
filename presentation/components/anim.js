import React from 'react';
import PropTypes from 'prop-types';
import { Appear, Anim } from 'spectacle';
import IB from './primitives/inline-block';
import { underline } from '../theme';
import Tween from './tween';
import PowerTween from './power-tween';
import SplitText from './split-text';

function Bounce(props) {
  return (
    <Appear
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
    </Appear>
  );
}
Bounce.propTypes = {
  children: PropTypes.node.isRequired,
};

function Fade(props) {
  const divStyle = props.block ? {} : { display: 'inline-block' };
  return (
    <Appear
      startValue={{
        opacity: 0,
      }}
      endValue={{
        opacity: 1,
      }}
      transitionDuration={props.transitionDuration}
      {...props}
    >
      <div style={divStyle}>{props.children}</div>
    </Appear>
  );
}
Fade.defaultProps = {
  block: false,
  transitionDuration: 300,
};
Fade.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  transitionDuration: PropTypes.number,
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

function GsapExample(props) {
  return (
    <Tween
      from={{
        duration: 0.4,
        params: { y: -200 },
      }}
      to={[
        [
          {
            duration: 0.4,
            params: { y: 0 },
          },
          {
            duration: 0.2,
            params: { y: 100 },
          },
        ],
        [
          {
            duration: 1.0,
            params: { x: 300, y: 150 },
          },
          {
            duration: 2.0,
            params: { x: 350, y: 250 },
          },
        ],
      ]}
    >
      {props.children}
    </Tween>
  );
}
GsapExample.propTypes = {
  children: PropTypes.node.isRequired,
};

function DirectAnimExample(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'translateY(-1em)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'translateY(0em)',
      }]}
      easing="bounceOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </Anim>
  );
}
DirectAnimExample.propTypes = {
  children: PropTypes.node.isRequired,
};

function Letterwave(props) {
  return (
    <PowerTween
      anims={[
        [
          {
            method: 'staggerFrom',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: -100, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
          {
            method: 'staggerTo',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: 200, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
        ],
        [
          {
            method: 'staggerTo',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: 300, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
        ],
      ]}
    >
      <div>
        <SplitText>
          {props.children}
        </SplitText>
      </div>
    </PowerTween>
  );
}
Letterwave.propTypes = {
  children: PropTypes.node.isRequired,
};

function CallFn({ fn }) {
  return (
    <PowerTween
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.01,
            args: [{ onComplete: fn }],
          },
        ],
      ]}
    >
      <div />
    </PowerTween>
  );
}
CallFn.propTypes = {
  fn: PropTypes.func.isRequired,
};

// function DropIn(props) {
//   return (
//     <PowerTween
//       anims={[
//         [
//           {
//             method: 'from',
//             // target: tgt => tgt.querySelectorAll('[data-drop-in-target]')[0],
//             // target: tgt => '.css-z73ryg',
//             // target: tgt => tgt,
//             // target: tgt => '[data-drop-in-target]',
//             target: tgt => '#foo',
//             duration: 1.0,
//             // args: [{ css:{ boxShadow: 130 }, ease: Elastic.easeOut.config(1, 0.6) }],
//             // args: [{ css: { height: 800 }}],
//             args: [{ y: 300, ease: Elastic.easeOut.config(1, 0.6) }],
//           },
//         ],
//       ]}
//     >
//       <div>{props.children}</div>
//     </PowerTween>
//   );
// }
// DropIn.propTypes = {
//   children: PropTypes.node.isRequired,
// };
function DropIn(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'scale(1.5)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'scale(1)',
      }]}
      easing="cubicOut"
      {...props}
    >
      <div>{props.children}</div>
    </Anim>
  );
}
DropIn.propTypes = {
  children: PropTypes.node.isRequired,
};

function FromLeft(props) {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: 'translateX(-20%)',
      }}
      toStyle={[{
        opacity: 1,
        transform: 'translateX(0%)',
      }]}
      easing="cubicOut"
      {...props}
    >
      <IB>{props.children}</IB>
    </Anim>
  );
}
FromLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  Bounce,
  Fade,
  Stroke,
  Letterwave,
  CallFn,
  DropIn,
  FromLeft,
  //
  GsapExample,
  DirectAnimExample,
};
