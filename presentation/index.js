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
import theme from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';

require('normalize.css');
const swearTrekOpinionButtGif = require('../assets/swear-trek-opinion-butt.gif');

// Aliases
const SH = SectionHeading;
const H = SlideHeading;

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck transition={['slide']} transitionDuration={500} theme={theme} controls={false} bgColor="quarternary">
          <Slide >
            <Title>Big Title Slide</Title>
          </Slide>

          <Slide>
            <SH>Hi I'm eli slide</SH>
          </Slide>

          <Slide>
            <H>Some things about me slide</H>
          </Slide>

          <Slide>
            <H>What we talk about slide</H>
            <List>
              <ListItem>Why animation should be a first class citizen in UI design</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>

          <Slide>
            <H size={6} caps>[section heading]</H>
            <H>Animation's place in interactive design</H>
          </Slide>

          <Slide>
            <H>Animation is unfairly trivialized</H>
            <Notes>
              Animation is often regarded with skepticism at best, and outright derision at worst.
            </Notes>
          </Slide>

          <Slide>
            <Bounce><H size={1}>Superfluous</H></Bounce>
            <Bounce><H>Surprise &amp; delight</H></Bounce>
            <Bounce><H>[Collect other quotes here]</H></Bounce>
            <Notes>
              I've heard folks call animation in UI design superfluous, give it a backhanded complement of "surprise and delight"
              the implication being that its not serious enough to be a part of "real" design
            </Notes>
          </Slide>

          <Slide>
            <Image style={{ minWidth: '40vw' }} src={swearTrekOpinionButtGif} />
            <Notes>
              This is total nonsense. 
            </Notes>
          </Slide>

          <Slide>
            <H size={6}>some graphic [[Animation is actually powerful]]</H>
            <Notes>
              Animation is actually incredibly powerful, expressive and useful design tool.
              It deserves to be taken seriously, at least as seriously as traditional design precepts.
            </Notes>
          </Slide>

          <Slide>
            <H size={6}>subsection heading</H>
            <H>A different way to think about design</H>
            <Notes>
              In order to fully appreciate design's usefulness, lets think about design in a kind of weird way.
            </Notes>
          </Slide>

          <Slide>
            <H>Leverages Biological &amp; cultural factors</H>
            <Notes>
              Design leverages biological and cultural factors of how humans process our environemnt in order to more effectively rely information.
            </Notes>
          </Slide>

          <Slide>
            <H size={6}>[Hierarchy slide, some graphic to illustrate, maybe a hierarchical page and a picture of a walkway along the hudson with someone running in the foreground, and NYC in the back]</H>
          </Slide>

          <Slide>
            <H>[typography slide, graphic of a geometric sans, gif of zach galafinaikis math, and then a picture of a modern building]</H>
          </Slide>

          <Slide>
            <H>We are also hard wired to infer meaning from motion</H>
          </Slide>

          <Slide>
            <H size={6}>Needs to be graphics here, maybe break up this slide, it's important information, take your time on it</H>
            <H>What System vs. Where System</H>
            <Notes>
              Margaret Livingstone, a professor of neurobiology at harvard university 
              notes that humans have two primary pathways of visual perception: the what system and the where system. 
              The What system has more to do with color and form, whereas the Where system has to do more with contrast and 
              animation. The where system is also evolutionary MUCH older, and to borrow a computer science term, closer to the metal.
              You can use animation to more directly communicate with the users hindbrain, and more efficiently manage users cognition
              and emotional state, which at the end of the day, is the goal of design: helping people understand information better, 
              and forging a deeper connection betrween the user and the experience.
            </Notes>
          </Slide>

          <Slide>
            <H>[image of a brain? 3d brain? brain gif?]</H>
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
