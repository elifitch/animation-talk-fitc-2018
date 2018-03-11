/* eslint-disable global-require, import/no-dynamic-require */

import React from 'react';
import { Image } from 'spectacle';
import PropTypes from 'prop-types';

class Pic extends React.Component {
  render() {
    const source = require(`../../assets/${this.props.src}`);
    return (
      <Image
        style={{
          minWidth: '40vw',
          // maxWidth: '80vw',
          // maxHeight: '620px',
        }}
        src={source}
      />
    );
  }
}

Pic.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Pic;
