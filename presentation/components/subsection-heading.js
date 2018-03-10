import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'spectacle';
import styled from 'react-emotion';
import { underline } from '../theme';

const SSH = styled(Heading)(underline);

class SubsectionHeading extends React.Component {
  render() {
    return (
      <SSH size={3} textColor="nearBlack" {...this.props}>{this.props.children}</SSH>
    );
  }
}

SubsectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubsectionHeading;
