/* eslint-disable no-unused-expressions */

import createTheme from 'spectacle/lib/themes/default';
import { injectGlobal } from 'emotion';

require('../assets/fonts/brandon-grotesque-bld-it.eot');
require('../assets/fonts/brandon-grotesque-bld-it.woff');
require('../assets/fonts/brandon-grotesque-bld-it.ttf');
require('../assets/fonts/brandon-grotesque-bld-it.svg');

require('../assets/fonts/pinopolis.eot');
require('../assets/fonts/pinopolis.woff');
require('../assets/fonts/pinopolis.ttf');
require('../assets/fonts/pinopolis.svg');

export const pink = '#ff4cff';
export const purple = '#9636f5';
export const whitesmoke = '#fafafa';
export const nearBlack = '#333333';

injectGlobal`
  @font-face {
    font-family: 'brandon grotesque';
    src: url('fonts/brandon-grotesque-bld-it.eot'); /* IE9 Compat Modes */
    src: url('fonts/brandon-grotesque-bld-it?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/brandon-grotesque-bld-it.woff') format('woff'), /* Modern Browsers */
        url('fonts/brandon-grotesque-bld-it.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/brandon-grotesque-bld-it#db83a1450782399269807c88b8666559') format('svg'); /* Legacy iOS */
        
    font-style:   italic;
    font-weight:  700;
  }

  @font-face {
    font-family: 'pinopolis';
    src: url('fonts/pinopolis.eot'); /* IE9 Compat Modes */
    src: url('fonts/pinopolis.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/pinopolis.woff') format('woff'), /* Modern Browsers */
        url('fonts/pinopolis.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/pinopolis.svg#8ff9940f08c2041fdb659662283797d3') format('svg'); /* Legacy iOS */
        
    font-style:   normal;
    font-weight:  400;
  }
`;

const theme = createTheme({
  primary: whitesmoke, // background
  secondary: nearBlack,
  tertiary: purple,
  quarternary: '#CECECE',
  nearBlack,
}, {
  primary: 'brandon grotesque',
  secondary: 'pinopolis',
});

export default theme;
