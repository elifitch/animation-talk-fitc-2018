import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'spectacle';
import { headingLineheight } from '../theme';


class SlideHeading extends React.Component {
  render() {
    return (
      <Heading
        size={2}
        textColor="nearBlack"
        lineHeight={headingLineheight}
        {...this.props}
      >
        {this.props.children}
      </Heading>
    );
  }
}

SlideHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideHeading;
