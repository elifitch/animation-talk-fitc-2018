import React from 'react';
import {
  BlockQuote,
  Cite,
  Quote,
  Deck,
  // Heading,
  ListItem,
  List,
  Slide,
  // Image,
  // Text,
  Notes,
} from 'spectacle';
import { Bounce, Fade, Stroke } from './components/anim';
import theme from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import Pic from './components/pic';
import Vid from './components/vid';
// import Underline from './components/underline';

require('normalize.css');

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
            <Pic src="swear-trek-opinion-butt.gif" />
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
            <SSH>A different way<br />to think about design</SSH>
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
            <H>
              <div><Fade>What System</Fade></div>
              <div>vs.</div>
              <div><Fade>Where System</Fade></div>
            </H>
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
            <Pic src="obnoxious-ad.gif" />
            <Notes>
              It can be as innocuous as this, using animation's power to guide focus to continually reel attention towards an ad
            </Notes>
          </Slide>

          <Slide>
            <Vid src="slot.mp4" />
            <Notes>
              Or as serious as creating animations specifically to help addict someone to gambling, as is common in slot machines 
              and even many video games such as candy crush and various loot crates.
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
            <H>Be mindful of<br />vestibular issues</H>
            <Notes>
              Folks with vestibular disorders can experience intense vertigo, dizziness, neausea, headaches, and other adverse symptoms.
              Try to avoid, animation that covers large parts of the screen, animations that quickly cover large distances, and simultaneous motion in different directions.
              It is worse if these factors are combined. Avoid flashing animations as well, as those can be triggers for folks with epilepsy and migraines.
            </Notes>
          </Slide>

          <Slide>
            <H>Provide alternatives</H>
            <Notes>
              If animation is a large part of your app, give users the option to disable animations in their user preferences. This will be necessary 
              until the "prefers-reduced-motion" media query lands in more browsers than just Safari. There's no timeline on that right now but 
              hopefully it's soon. Once that media query is widespread, users will you'll be able to set a flag in their browser that you can 
              hook into to reduce or eliminate animation.
            </Notes>
          </Slide>

          <Slide>
            <H>[[should have a diff title here, because both cogni and spacial reduce cognitive load]]</H>
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

          <Slide>
            <H>Cueing</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Vid src="affordance.mp4" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Confirmation</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Pic src="confirmation.gif" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SSH>Spacial orientation</SSH>
            <Notes>
              Animation also allows users to build spacial maps, because there's a clear idea of motion from one state to another.
            </Notes>
          </Slide>

          <Slide>
            <H>Spacial orientation</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>[[We live in a spacial world]]</H>
            <Notes>
              We unconsciously build mental maps of the world around us, and it lets us generally know where things are 
              without tons of conscious effort. When we create interfaces that snap from state to state, it prevents us 
              from building that mental map and instinctively knowing where we are in a flow.
            </Notes>
          </Slide>

          <Slide>
            <H>Mental map of what's out of view</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>[[animation of a hamgurger menu or something else off screen like a modal]]</H>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Provides a sense of depth</H>
            <Notes>
              Humans more naturally understand 3d spaces than 2d spaces. It's common to layer elements on top of other elements
              as your UI becomes more complex. Animating these items into place lets the user understand where they came from,
              creates a sense of depth, and smooths the context change of another item appearing.
            </Notes>
          </Slide>

          <Slide>
            <H>[[animation of modal dropping from above (opacity and scale)]]</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Especially important on mobile</H>
            <Notes>
              Users on mobile look at your app or site through a tiny little port hole, and while moving from view to view 
              it's very easy to become lost. 
            </Notes>
          </Slide>

          <Slide>
            <H>[[video of ios settings screen-to-screen animation]]</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <SSH>Animation skews time</SSH>
            <Notes>
              Time is a funny thing. It can appear to slow down, speed up, expand and contract.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="picard.jpg" />
            <Notes>
              And for some people, time might not even really exist at all
            </Notes>
          </Slide>
          
          <Slide>
            <H>Animation governs our perception of time</H>
            <Notes>
              Humans are really bad at sensing how long things take. We take cues from how things move and change in 
              our environment to know how long time is passing. Thus we can use animation to make it seem like loading 
              takes less time than it actually does.
            </Notes>
          </Slide>

          <Slide>
            <H>[[Port over progress bar demo]]</H>
            <Notes>
              Grad students at carnegie mellon university showed that progress bars feel like they fill 12% faster if they have 
              bands that animate against the direction of the bar. This operates off the same principle as riding on a train 
              and seeing another train coming the opposite direction, it feels like you're going twice as fast. We naturally 
              try to fit what we see into existing spacial patterns.
            </Notes>
          </Slide>

          <Slide>
            <H>Animation keeps us mentally engaged</H>
            <Notes>
              Animation keeps us mentally engaged through a long waiting period, and when we're mentally engaged, 
              time seems to move more quickly.
            </Notes>
          </Slide>

          <Slide>
            <H>[[slack video]]</H>
            <Notes>
              Slack conducts a masterclass here, moving from loading anim to loading anim to keep you engaged, 
              and make the loading process seem like it's faster than it actually  is.
            </Notes>
          </Slide>

          <Slide>
            <SH>Emotion</SH>
            <Notes>
              So we've been over the myriad ways animation can manage human cognition, but the other side of that 
              coin is how animation can influence our emotional state, even more than static design principles 
              like color or typography, we infer a remarkable amount of information from motion.
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>What we talk about slide</ListHeading>
            <List>
              <ListItem>How humans ascribe meaning to motion</ListItem>
              <ListItem>The building blocks of character</ListItem>
              <ListItem>How to design animations to evoke a desired feeling</ListItem>
            </List>
          </Slide>

          <Slide>
            <SH>Meaning from motion</SH>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide transition={['fade']}>
            <Pic src="twa-empty.png" />
            <Notes>
              Simple question, what are these? Seiously what are they? Some shapes, rectangles? 
            </Notes>
          </Slide>

          <Slide transition={['fade']}>
            <Pic src="twa-full.jpg" />
            <Notes>
              Nope, they're characters from a wonderful video game called "Thomas was alone". 
              This one is thomas, here's chris, this one is claire, over here we have laura.
              I know what you're probably thinking right? Okay these are characters, but they don't seem very expressive.
              How could you know anything about them, they're just shapes.
            </Notes>
          </Slide>

          <Slide transitionOut={['fade']}>
            <BlockQuote>
              <Quote>The jump in Thomas Was Alone might be amongst the best ever programmed...</Quote>
            </BlockQuote>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide transitionIn={['fade']}>
            <BlockQuote>
              <Quote>Amazingly, I felt more connected to Thomas Was Alone's colored, polygonal blocks than I have to most human characters</Quote>
              <Cite>Evan Narcisse, Kotaku</Cite>
            </BlockQuote>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>[[video of thomas and co jumping]]</H>
            <Notes>
              Each distinct character has a distint jump animation that goes with their charchacter. Thomas has a bright and 
              happy jumping style that underlines his optimism. John has a big scrunch up and bound, very bombastic, and 
              it goes right along with his arrogant attitude. Chris has a short boop and plop, he's very self conscious about 
              his limitations when it comes to jumping. and on and on it goes.  The point is, we ascribe characters, feelings, 
              and indeed emotions to these shapeless polygons.  Their animation was a big part of that.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="fritz-heider-marianne-simmel.mp4" />
            <Notes>
              This has been verified with experiments as well, most famously by Fritz Heider and Marianne Simmel in 1944.
              They showed this film to subjects, and all of them described the scene by anthropomorphizing the shapes. 
              We can use the tendencies of humans to ascribe meaning to motion in order to create 
            </Notes>
          </Slide>

          <Slide>
            <SH>The building blocks<br />of character</SH>
            <Notes>
              It's comparatively easy to give users an affordance by hinting at an action, or to help users build spacial 
              relationships by animating view transitions. If we're going to influence user's emotional responses, we need 
              to be much more intentional about the details of our animations.
            </Notes>
          </Slide>

          <Slide>
            <H>Timing &amp; Spacing</H>
            <Notes>
              Timing and spacing work together to form the character of an animation.
            </Notes>
          </Slide>

          <Slide>
            <H>[[linear ease bouncing ball animation]]</H>
            <Notes>
              Timing forms the structure of an animation. In CSS terms, this is the "duration" of an animation. 
              Illustrating what effect timing alone has on a classic bouncing ball animation, you can probably see 
              that the animation doesn't have a lot of character, and it's almost unsettlingly mechanical.
            </Notes>
          </Slide>

          <Slide>
            <H>[[bouncy ease bouncing ball animation]]</H>
            <Notes>
              Now we're getting somewhere! If timing is the structure of an animation, spacing is where we get 
              most of the style. It's kind of like the CSS to timing's HTML. It's called spacing, because it 
              in the old days when frames were drawn by hand, this would refer to the amount of space between 
              each frame. In UI animation we call it easing.
            </Notes>
          </Slide>

          <Slide>
            <H>[[component playground? bouncy ease change to a heavy bounce]]</H>
            <Notes>
              See how much difference a simple change in spacing, or easing, can bring? When before we had something 
              like a ping pong ball we now have something heavy and weighty. The entire character is different. This 
              is a simple, classic example, but it's classic because it's an elegant way to show just how much impact 
              spacing can have on an animation. We can take this and extrapolate it way out to create all sorts of 
              sensations from our animations.
            </Notes>
          </Slide>
          
        </Deck>
      </div>
    );
  }
}
