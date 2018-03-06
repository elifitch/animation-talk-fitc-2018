import React from 'react';
import styled from 'react-emotion';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  // Appear,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import { FancyAppear } from './components/fancy-appear';

require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE',
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica',
});

const CustomHeader = styled(Heading)`
  color: blue;
  font-size: 100px;
  transform: scale(3)
`;
const InlineBlock = styled('div')`
  display: inline-block;
`;

const startAnim = {
  opacity: 0,
  transform: 'translateY(-1em)',
};

const endAnim = {
  opacity: 1,
  transform: 'translateY(0em)',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <InlineBlock>Fancy appears?&nbsp;</InlineBlock>
          <FancyAppear
            startValue={startAnim}
            endValue={endAnim}
            easing="bounceOut"
          >
            <InlineBlock><b>This&nbsp;</b></InlineBlock>
          </FancyAppear>
          <FancyAppear
            startValue={startAnim}
            endValue={endAnim}
            easing="bounceOut"
          >
            <InlineBlock><b>could&nbsp;</b></InlineBlock>
          </FancyAppear>
          <FancyAppear
            startValue={startAnim}
            endValue={endAnim}
            easing="bounceOut"
          >
            <InlineBlock><b>be&nbsp;</b></InlineBlock>
          </FancyAppear>
          <InlineBlock>pretty darn cool!</InlineBlock>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <CustomHeader size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </CustomHeader>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
