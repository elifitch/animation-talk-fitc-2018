import React from 'react';
import { Heading } from 'spectacle';
import Title from '../components/title';
import { Letterwave } from '../components/anim';

class ThankYouSlide extends React.Component {
  render() {
    return (
      <div>
        {/* <Letterwave><Title lineHeight={1}>Thanks Folks!</Title></Letterwave> */}
        <Title lineHeight={1}><Letterwave>Thanks Folks!</Letterwave></Title>
      </div>
    );
  }
}

export default ThankYouSlide;
