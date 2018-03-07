/* eslint-disable no-unused-expressions */

import createTheme from 'spectacle/lib/themes/default';
import { injectGlobal } from 'emotion';

require('../assets/fonts/brandon-grotesque-blk-it.eot');
require('../assets/fonts/brandon-grotesque-blk-it.woff');
require('../assets/fonts/brandon-grotesque-blk-it.ttf');
require('../assets/fonts/brandon-grotesque-blk-it.svg');

require('../assets/fonts/pinopolis.eot');
require('../assets/fonts/pinopolis.woff');
require('../assets/fonts/pinopolis.ttf');
require('../assets/fonts/pinopolis.svg');

injectGlobal`
  @font-face {
    font-family: 'brandon grotesque';
    src: url('fonts/brandon-grotesque-blk-it.eot'); /* IE9 Compat Modes */
    src: url('fonts/brandon-grotesque-blk-it?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/brandon-grotesque-blk-it.woff') format('woff'), /* Modern Browsers */
        url('fonts/brandon-grotesque-blk-it.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/brandon-grotesque-blk-it#db83a1450782399269807c88b8666559') format('svg'); /* Legacy iOS */
        
    font-style:   italic;
    font-weight:  800;
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
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE',
}, {
  primary: 'brandon grotesque',
  secondary: 'pinopolis',
});

export default theme;
