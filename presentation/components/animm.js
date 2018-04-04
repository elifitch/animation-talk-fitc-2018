import React from 'react';
import PropTypes from 'prop-types';
import { Appear, Anim } from 'spectacle';
import IB from './primitives/inline-block';
import { underline } from '../theme';
import Tween from './tween';
import PowerTween from './power-tween';
import SplitText from './split-text';

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
