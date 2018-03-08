import React from 'react';
import {
  // BlockQuote,
  // Cite,
  Deck,
  Heading,
  ListItem,
  List,
  // Quote,
  Slide,
  Image,
  // Text,
  Notes,
} from 'spectacle';
import { Bounce } from './components/anim';
import Heading3D from './components/heading-3d';
import theme from './theme';

require('normalize.css');
const swearTrekOpinionButtGif = require('../assets/swear-trek-opinion-butt.gif');

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck transition={['slide']} transitionDuration={500} theme={theme} controls={false}>
          <Slide bgColor="primary">
            <Heading3D>Big Title Slide</Heading3D>
          </Slide>

          <Slide>
            <Heading>Hi I'm eli slide</Heading>
          </Slide>

          <Slide>
            <Heading>Some things about me slide</Heading>
          </Slide>

          <Slide>
            <Heading>What we talk about slide</Heading>
            <List>
              <ListItem>Why animation should be a first class citizen in UI design</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={6} caps>[section heading]</Heading>
            <Heading>Animation's place in interactive design</Heading>
          </Slide>

          <Slide>
            <Heading>Animation is unfairly trivialized</Heading>
            <Notes>
              Animation is often regarded with skepticism at best, and outright derision at worst.
            </Notes>
          </Slide>

          <Slide>
            <Bounce><Heading>Superfluous</Heading></Bounce>
            <Bounce><Heading>Surprise &amp; delight</Heading></Bounce>
            <Bounce><Heading>[Collect other quotes here]</Heading></Bounce>
            <Notes>
              I've heard folks call animation in UI design superfluous, give it a backhanded complement of "surprise and delight"
              the implication being that its not serious enough to be a part of "real" design
            </Notes>
          </Slide>

          <Slide>
            <Image style={{ minWidth: '40vw' }} src={swearTrekOpinionButtGif} />
          </Slide>

          <Slide>
            <Heading>A set of biological &amp; cultural assumptions</Heading>
          </Slide>

          <Slide>
            <Heading size={6}>[Hierarchy slide, some graphic to illustrate, maybe a hierarchical page and a picture of a walkway along the hudson with someone running in the foreground, and NYC in the back]</Heading>
          </Slide>

          <Slide>
            <Heading>[typography slide, graphic of a geometric sans, gif of zach galafinaikis math, and then a picture of a modern building]</Heading>
          </Slide>

          <Slide>
            <Heading>[image of a brain? 3d brain? brain gif?]</Heading>
            <Notes>
              Without the human hindbrain's ability to rapidly draw associations, 
              and fit new things into established patterns, design wouldn't work.
            </Notes>
          </Slide>
        </Deck>
      </div>
    );
  }
}
