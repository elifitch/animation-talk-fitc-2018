/* eslint-disable global-require, import/no-dynamic-require */

import React from 'react';
import { Image } from 'spectacle';
import PropTypes from 'prop-types';

class Pic extends React.Component {
  render() {
    const source = require(`../../assets/${this.props.src}`);
    const baseStyle = {
      minWidth: '40vw',
    };
    const portraitStyle = this.props.portrait ? {
      maxHeight: 600,
      width: 'auto',
      maxWidth: 'none',
      minWidth: 'none',
    } : {};
    const still = Object.assign({}, baseStyle, portraitStyle, this.props.style);
    return (
      <Image
        style={still}
        src={source}
      />
    );
  }
}

Pic.defaultProps = {
  style: {},
  portrait: false,
};

Pic.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  portrait: PropTypes.bool,
};

export default Pic;
