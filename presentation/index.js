/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
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
import { Bounce, Fade } from './components/anim';
import theme from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import Pic from './components/pic';
import Vid from './components/vid';

require('normalize.css');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
const H = SlideHeading;
const Annot = ({ children }) => <H size={6}>{children}</H>;
Annot.propTypes = PropTypes.node.isRequired;

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
            <Annot>[[some graphic: Animation is actually powerful/think different]]</Annot>
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
            <Annot>[Hierarchy slide, some graphic to illustrate, maybe a hierarchical page and a picture of a walkway along the hudson with someone running in the foreground, and NYC in the back]</Annot>
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
            <Annot>Needs to be graphics here, maybe break up this slide, it's important information, take your time on it</Annot>
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
            <H><Bounce>Timing</Bounce> &amp; Spacing</H>
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
          
          <Slide>
            <Annot>make this a comical carousel, switching from 12 principles to 5 (or whatever), principles to guidlines, disneys to Elis, whatever</Annot>
            <SSH>Disney's 12 Principles</SSH>
            <Notes>
              If we're going to create animations that evoke the desired emotions from our users, that exhibit the right character, 
              traditional animation principles can be extremely useful. Disney's 12 principles are the gold standard, but many 
              of them don't really make sense on the web. So it's gonna be more like 6? 5? And more like guidelines than principles 
              and I guess if we're changing so much they're really from me. SO here we go Eli's 5 guidelines?  We'll walk through them 
              with examples that show how they can make a brand feel more fun and energetic, evoking a feeling of joy in users; and we'll 
              also show how they can make a brand feel more serious and somber, evoking a feeling of trust in users.
            </Notes>
          </Slide>

          <Slide>
            <Annot>animate the text to illustrate your point</Annot>
            <H>Anticipation &amp; Follow through</H>
            <Notes>
              Anticipation is a movement against the main animation in--dot dot dot--anticipation of the main animation. 
              Follow through is the opposite, an animation that continues through the final resting place 
            </Notes>
          </Slide>

          <Slide>
            <Annot>animate the text to illustrate your point</Annot>
            <H>Anticipation &amp; Follow through</H>
            <Notes>
              Anticipation is a movement against the main animation in--dot dot dot--anticipation of the main animation.
              Follow through is the opposite, an animation that continues through the final resting place
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[side by side animations of a modal entering and leaving, one more somber and one more serious, maybe have one fade and one full opacity at a time to direct attention]]</Annot>
            <Notes>
              Here we have two animations, one more playful and one more serious, that use anticipation and followthrough. 
              The playful one uses anticipation n followthrough to show effervesence and joie de vivre. It can be a really 
              effective way to show life and "boucniness". But here we also are using anticipation and followthrough, but 
              in this case it shows weight and solidity, traits that more serious brands like to fancy themselves as having.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[make an animation here when switching slides the characters each have a delay and the floop into place like dropping cards on a table]]</Annot>
            <H>Secondary action</H>
            <Notes>
              Secondary action is a way to 
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[show medium clap animation, show inputs in a modal dropping in sliding into place in sequence]]</Annot>
            <Notes>
              These are both uses of secondary action. The first is a way to give an animation extra pop, kind of adding a 
              flourish to something to make an action feel special and rewarding. The second is inputs cascading into place 
              with their parent. It's a way to make an animation feel more natural and grounded, ideal for more serious brands.
            </Notes>
          </Slide>

          <Slide>
            <H>Squash &amp; Stretch</H>
            <Notes>
              As objects move through air, they deform a little bit. This elongation along the axis of motion also 
              helps to visually give the appearance of a smoother animation (much as blurring does). Used in small doeses 
              it just serves to make the animation feel more natural, and for brands that want to be fun, playful, and happy, 
              or want to make their users feel that way, squash n stretch is a great way to make your project stand out. 
              It's hard to pull off well, so most don't even try, put in a little effort and reap the dividends.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[show modal coming in without SS and then with SS]]</Annot>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride 
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using 
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think 
              they're too serious and important to use it.
            </Notes>
          </Slide>

          <Slide>
            <H>[[show modal coming in without SS and then with SS]]</H>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think
              they're too serious and important to use it.
            </Notes>
          </Slide>

          <Slide>
            <H>These combine to form an infinite palette</H>
            <Notes>
              This might seem limiting, but the right timing, easing, anticipation, follow through, secondary action, and S&amp;S 
              can give you near infinite possibilities in creating the right type of motion for your brand.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[animate the words]]</Annot>
            <H>Energetic or lively</H>
            <Notes>
              Use animations with more springiness, use more generous overshoots/followthroughs. Soft overshoots feel friendly 
              and energetic, sharp, quick overshoots though can show frenetic urgency. Be careful.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[animate the words]]</Annot>
            <H>Playful or outgoing</H>
            <Notes>
              Use more squash and stretch to make animations feel springy and elastic. Animations that look like they make 
              the sound "boinngngngngngngng". Again, a little goes a long way.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[animate the words]]</Annot>
            <H>Decisive or self assured</H>
            <Notes>
              Restrained ease-in-out is the way to go. They feel balanced, stable, physical, and weighty without being heavy. 
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[animate the words]]</Annot>
            <H>Calm, reserved or stable</H>
            <Notes>
              Use smaller movements, less distance, shorter durations. Maybe choose to animate color, opacity, 
              blur instead of using motion at all.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[##### Brand level stuff]]</Annot>
            <SSH>Finding the right character</SSH>
            <Notes>
              Everything we've covered so far on how to evoke the right feelings will be meaningless if you can't find what 
              the right feeling is for your particular application, brand, project, whatever. And this can be the trickiest 
              nut to crack.
            </Notes>
          </Slide>

          <Slide>
            <H>
              <div><Fade>Ground up</Fade></div>
              <span>vs.</span>
              <div><Fade>Top down</Fade></div>
            </H>
            <Notes>
              When buildling out UI animation for your brand or project, you can either start from scratch, building from the 
              bottom up, or start with what you have, coming from the top down. When setting out to design animation to manage 
              cognition -- to make your UI easier to use, easier to understand -- animations that are slightly different are 
              okay, and the time savings of starting from what you already have is totally worth it! On the other hand, in 
              desinging aniations to evoke a specific set of feelings you need to be much more intentional about the 
              details of your animations. This means that even a small number of animations that deviate from what you need 
              it can break everything.
            </Notes>
          </Slide>

          <Slide>
            <H>Start with words</H>
            <Notes>
              I always try to start with words. The best place to look, if the brand in question has one, is a copywriting 
              style guide. Those are treasure troves of descriptive words that detail how the brand wants to be expressed. 
              I also dig through brand guidelines, style guides, I interview folks about how they want the brand to make 
              people feel, how they characterize it. These words will give you a set of sensations that you want to bring 
              out in users. Some common ones I hear a lot are: friendly, energetic, serious, trustworthy, erudite, playful, 
              decisive, things like that. Keep those words as a list, maybe even written out by hand, visible at all times 
              while you're designing animations, so you can make sure they suit.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[Maybe animate each of the words in notes, could be cool]]</Annot>
            <H>Rely on onomatopoeia</H>
            <Notes>
              Sounds like fwoosh, boingngng, kathung, shumpf, kathoom; these sounds can be helpful in communicating how an
              animation is supposed to feel, especially with clients. The sound can even indicate the desired easing.
              Kathoomp is different from kathooooomp, and kaaaaaathoomp.
            </Notes>
          </Slide>

          <Slide>
            <H>Physical objects help</H>
            <Notes>
              I find keeping around an object or objects that represent the brand can be extremely helpful. A few years ago 
              I was designing and building UI animations for the website of an industry advocacy group. In talking with the 
              client, they spoke about their brand wanting to feel serious, impressive, trustworthy, consistent, levelheaded. 
              They wanted users to feel assured. I was typing up notes from this meeting in this agency's machine shop, and 
              I found a large, 2 inch ball bearing. I actually have it right here. It's heavy, solid, completely smooth and 
              uniform. It was a perfect represenatation of how this brand wanted people to feel. So I kept it on my desk through 
              the whole process and would pull it out, toss it from hand to hand to get a feel of the weight, the smoothness 
              and use that in designing UI animation.
            </Notes>
          </Slide>

          <Slide>
            <H>Music works too</H>
            <Notes>
              Much like a physical object, you can use a piece of music as a touchstone. Val Head is an amazin web animator, 
              and she's a big fan of using a piece of music as a touchstone. Use the rhythm, form, sensations of the music 
              and use that as a reference for your animations. Work until your animations feel "right" alongside that 
              piece of music.
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[a wrap up slide for the emotion section]]</Annot>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <SH>Process</SH>
            <Notes>
              All of this is for naught if you can't bake animation into your web design process.
            </Notes>
          </Slide>

          <Slide>
            <H>Don't wait for permission</H>
            <Notes>
              ... because it might not come. If, like me, you struggle to get buy in for animation in design, 
              it's less productive to try to make a case and get people on board than it is to just start doing it. 
              Start making storyboards, start making prototypes, start an animation working group.
            </Notes>
          </Slide>
          
        </Deck>
      </div>
    );
  }
}
