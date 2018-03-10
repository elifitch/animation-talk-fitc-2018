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
import { Bounce, Fade } from './components/anim';
import theme from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';

require('normalize.css');
const swearTrekOpinionButtGif = require('../assets/swear-trek-opinion-butt.gif');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
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
            <H>Hi I'm eli slide</H>
          </Slide>

          <Slide>
            <H>Some things about me slide</H>
          </Slide>

          <Slide>
            <ListHeading>What we talk about slide</ListHeading>
            <List>
              <ListItem>Why animation should be a first class citizen in UI design</ListItem>
              <ListItem>How to use animation to influence user cognition</ListItem>
              <ListItem>How animation can shape users' emotional state</ListItem>
              <ListItem>How to build animation into your design process</ListItem>
            </List>
          </Slide>

          <Slide>
            <SH>Animation's place in interactive design</SH>
          </Slide>

          <Slide>
            <H>Animation is<br />unfairly trivialized</H>
            <Notes>
              Animation is often regarded with skepticism at best, and outright derision at worst.
            </Notes>
          </Slide>

          <Slide>
            <div><Bounce><H size={6}>Superfluous</H></Bounce></div>
            <div><Bounce><H size={6}>Surprise &amp; delight</H></Bounce></div>
            <div><Bounce><H size={6}>[Collect other quotes here]</H></Bounce></div>
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
            <H size={6}>[[some graphic: Animation is actually powerful/think different]]</H>
            <Notes>
              Animation is actually incredibly powerful, expressive and useful design tool.
              It deserves to be taken seriously, at least as seriously as traditional design precepts.
              In order to fully appreciate animation's usefulness, lets think about design in a kind of weird way.
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
            <H>Biological &amp; Cultural</H>
            <Notes>
              Design leverages biological and cultural factors of how humans process our environemnt in order to more effectively rely information.
            </Notes>
          </Slide>

          <Slide>
            <H>[image of a brain? 3d brain? brain gif?]</H>
            <Notes>
              Without the human hindbrain's ability to rapidly draw associations,
              and fit new things into established patterns, design wouldn't work.
            </Notes>
          </Slide>

          <Slide>
            <H size={6}>[Hierarchy slide, some graphic to illustrate, maybe a hierarchical page and a picture of a walkway along the hudson with someone running in the foreground, and NYC in the back]</H>
          </Slide>

          <Slide>
            <H>[typography slide, graphic of a geometric sans, gif of zach galafinaikis math, and then a picture of a modern building]</H>
          </Slide>

          <Slide>
            <H>Animation is no different</H>
            <Notes>
              We infer at least as much information from how things move or change over time.
              In fact some research suggests that we infer *more* information from animation than we do "traditional" design
            </Notes>
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
            <H>Animation is the most efficient way to communicate</H>
            <Notes>
              Because of this more "hardware" level connection with the human subconscious, animation is an incredibly information dense 
              way to communicate. It is at least as efficient as static design in communicating information.
            </Notes>
          </Slide>

          <Slide>
            <SH>Animation &amp; Cognition</SH>
            <Notes>
              Animation's place in our visual perception pipeline gives it unique abilities to influence human cognition
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Managing users' cognition</ListHeading>
            <List>
              <ListItem><Fade>Animating responsibly</Fade></ListItem>
              <ListItem><Fade>Lighten cognitive load</Fade></ListItem>
              <ListItem><Fade>Cognitive "muscle memory"</Fade></ListItem>
              <ListItem><Fade>Influence perception of time</Fade></ListItem>
            </List>
          </Slide>

          <Slide>
            <SSH>Animating Responsibly</SSH>
            <Notes>
              Because animation is a more intimate form of communication, it can have wildly unintended and sometimes even dangerous consequences.
              Before talking about all the cool stuff you can do with animation, we need to take a moment to talk about how to animate with accessibility in mind.
            </Notes>
          </Slide>

          <Slide>
            <H>Ethical animation</H>
            <Notes>
              As we'll see in a minute, animation has profound influence over how we think and feel. It is of the *utmost* importance to not 
              abuse that power or embrace "dark patterns". 
            </Notes>
          </Slide>

          <Slide>
            <H>Don't leave the non-visual behind</H>
            <Notes>
              Animation can be a fabulous tool to relay information, as we'll see, but make sure that you include other ways to consume that information for folks who can't see the animation.
              This serves the double purpose of also making your site generally that much more accessible.
            </Notes>
          </Slide>

          <Slide>
            <H>Be mindful of vestibular issues</H>
            <Notes>
              Folks with vestibular disorders can experience intense vertigo, dizziness, neausea, headaches, and other adverse symptoms.
              Try to avoid, animation that covers large parts of the screen, animations that quickly cover large distances, and simultaneous motion in different directions.
              It is worse if these factors are combined. Avoid flashing animations as well, as those can be triggers for folks with epilepsy and migraines.
            </Notes>
          </Slide>

          <Slide>
            <H>Be mindful of vestibular issues</H>
            <Notes>
              Folks with vestibular disorders can experience intense vertigo, dizziness, neausea, headaches, and other adverse symptoms.
              Try to avoid, animation that covers large parts of the screen, animations that quickly cover large distances, and simultaneous motion in different directions.
              It is worse if these factors are combined. Avoid flashing animations as well, as those can be triggers for folks with epilepsy and migraines.
            </Notes>
          </Slide>

          <Slide>
            <H>Provide a way out</H>
            <Notes>
              If animation is a large part of your app, give users the option to disable animations in their user preferences. This will be necessary 
              until the "prefers-reduced-motion" media query lands in more browsers than just Safari. There's no timeline on that right now but 
              hopefully it's soon. Once that media query is widespread, users will you'll be able to set a flag in their browser that you can 
              hook into to reduce or eliminate animation.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Lighten cognitive load</SSH>
            <Notes>
              Cognitive load is a term tossed around in UX design circles a lot. Basically what it means is the amount of consious and unconscious 
              mental effort being used. Animation can reduce that load by connecting the dots that people would otherwise have to connect themselves.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Lighten cognitive load</SSH>
            <Notes>
              Cognitive load is a term tossed around in UX design circles a lot. Basically what it means is the amount of consious and unconscious
              mental effort being used. Animation can reduce that load by connecting the dots that people would otherwise have to connect themselves.
            </Notes>
          </Slide>

          <Slide>
            <H>Research Approved!™</H>
            <Notes>
              Studies from the university of rotterdam and university of new mexico among many others have shown that animation 
              helps people retain information, peform better in problem solving tasks, and learn more efficiently. This is because 
              animation reduces cognitive load, but how?
            </Notes>
          </Slide>

          <Slide>
            <H>Multithreaded thinking</H>
            <Notes>
              When the UI changes, your brain has to spend cycles on determining what has changed on the screen and what that means. 
              When you animate a state transition, that work is offloaded to the visual side of the brain, letting the brain's 
              "main thread" continue uninterrupted, just like a computer with more than one processor thread.
            </Notes>
          </Slide>
          
        </Deck>
      </div>
    );
  }
}
