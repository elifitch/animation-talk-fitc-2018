# Animation Talk Outline

## Key points
* Animation should be a first class citizen in web design
* Animation is at least as effective as traditional design staples because it engages with humans' hindbrain; we are hard wired to infer meaning from animation
* How to communicate with animation
* How to integrate animation into your process

## Sections
* Animation should be a first class citizen in web design
  * because it's a "builtin"

-------TRANSITION: because animation is a builtin, you can use it subtly influence users cognition------

* How to use animation to manipulate users' cognition

-------TRANSITION: it can do more than influence how users think, animation can also influence how users feel------

* How to signal your brand values with animation // how to evoke emotion with animation
  * first cognition (how to use animation for UI stuff), then emotion (how to use it to make users feel what you want them to feel about your brand/xp/whatev)
  * The building blocks of communicating with animation => how to use those building blocks to evoke the right feelings
  * Good idea would be to make a few demos, each different, one for a serious brand and one for an energetic brand; show the differences side by side

-------TRANSITION: now that I've sold you, lets talk about strategies to help your team adopt animation into your design practice------

* How to build animation into your process

-----------------------------------------------------------------------------

## Intro
These slides should be made last
* Hello thank you
* Who I am
* What I'm gonna talk about

## Why animation should be a first class citizen
### Humans are hard wired to understand animation
#### Key points
* Design is a way to use hardwired human perception to decode information
* Humans are super hardwired to infer meaning from motion
* Thus animation is a very efficient communicator with the human hindbrain
* Example: typography vs animation
#### Points - Stream of C
* One way to think about design is it uses the built in, hardwired way humans perceive their environment to better communicate information. Look at this mess on a page, it doesn't say anything at a glance, now look at the same mess with some real color and hierarchy, you can get a much faster bead on what's going on. Why is this? Why is it easier to understand one over the other? I think that at least in part it is because the design more closely aligns with how your brain is set up to consume information about your surroundings. Bright colored, large, and or close things need to be considered first or that kangaroo is going to kick you in the shins.
* Humans are arguably at least as hardwired to infer meaning from motion as we are from color and proximity. If we weren't wired to focus our attention on motion, or be able to read the body language of other humans and other animals, we wouldn't have lasted long enough to create nature documentaries in the first place.
* If we're as hard wired to get meaning from motion as we are from color, form, heirarchy, etc; then it is absolutely important to include it in the design process.
* Think about how we choose typography. This geometric sans has clean mathematical lines that we interpret as clean, precise, and human made. We assume that humans will make this subconscious association, and so this typeface might be a good choice for a brand or experience that aligns with those factors like an architecture firm or a modern furniture store.
* If we're capable of making the mental leap that humans are capable of forming the relatively narrow subconscious associations between the shape of the letter A and the real world, if we're capable of making that assumption, then I don't see how you can be dismissive of the association that someone will subconsciously draw between the way things move. I think it's an easy argument to make that humans are more intrinsically familiar with motion than they are the associations we make when choosing a typeface.
* Animation is important because it is, like hierarchy, color, and yes, even the choice of typography, another way to communicate with your users hindbrain.
* Animation is often dismissed as mere "surprise and delight" (which is codswallop btw) but jesus christ I mean, if I found a way to make today's miserable, jaded user of the internet surprised and fucking *happy*, well dammit I'm gonna take that seriously.
* Margaret Livingston called the system of inferring information from shape and color the "what system" and inferring infromation from motion the "where system". The "where system" is less evolved, more human hardware than human software, and offers a more direct way to communicate with the human hindbrain.
* Kind of an offbeat way to think about design is this. Design leverages a set of biological and cultural assumptions about how people perceive the world around them. Think hierarchy. Objects that are larger (or closer) need to be handled and considered first, or you might end up on the wrong end of a kangaroo foot.
* What system vs where system: communicating via [color](https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/) has a bunch of different associations depending on culture, it's very hard to count on. Animation is closer to the metal, and interpretations are more stable across cultural lines.

### How to use animation to manipulate cognition
#### Key points
* Because animation is a "builtin" you can use that
* Help ease cognitive load, help people understand tasks
* Help with spacial awareness
* Helps assign values to brand
#### SOC
##### Cognitive load
* Animation is a connector. That's what it does.
* Human beings, we move through time. We're used to everthing in our life being interwoven with time. Interfaces that snap from state to state ignore the dimension of time, and are perceived by our hind brain as an outlier. Sure we can get used to them, but animation can smooth over how our brains consume information by infusing change with the dimension of time.
* When we move from one state to another in an app, instantaneously, our hindbrain works to figure out how we got from there to here. Showing an animation offloads that work to the visual cortex, to use a computery term, it offloads that work to the brain's GPU, keeping it off the main CPU thread, keeping brain cycles free for other things.
##### Spacial
* It also helps users build a spacial relationship for where they are in an application. This is super important especially on small screens. The smaller porthole you have to view the world, the more context you need to know where you are
* Offscreen navigation has become more and more popular...
* depth
* Think about IOS (settings app); as you move through an application pages slide in from the right to left, on top of the last page you were on. They don't snap into existence. This lets users gracefully move through flows, and cues them to interact with a back gesture to return to their last page, because they spacially know where it is.
* Morph objects from one state to another to signal to users that while information is presented in a different way now, they refer to the same thing [[sarah drasner map example: https://vimeo.com/162715963]]. Also look at like the IOS app icons. You zoom into the icon that both signals to you that the icon contains the app and reinforces where on the home screen the icon is to help nurture muscle memory.
##### Performance
* Humans moment-to-moment perception of time is closely tied with how things move in the world around them. You can use this to create animations that make things feel like they're faster than they actually are.
* Step one: Don't make animations that block user interactions. People should *never* have to feel like they're waiting for something because of an animation, no matter how dope it is
* Synthesize active state / hover animation "research" from performance talk; people tend to watch hover animations the first few times, which buys you time to load things behind the scenes.
* Slack move from loader to loader to keep users active
* Viget study on branded loaders being faster
##### Accessibility
* Animation is great for these functional things, but don't leave folks who use screen readers out in the cold. If you're using animation as a cue/hint/affordance, always make sure you have corresponding hints for them in (visually hidden) text.
* Be mindful of folks with vestibular disorders and avoid large sweeping motion on the display. Big factors are large scale on the screen, distance covered, and objects moving in different directions like parallax. And avoid animations that flash which can be a trigger for those with migraines (hellooooo) and epilepsy.
* The media query "prefers-reduced-motion" is out on Safari v10, and will hopefully be adopted soon by other browsers to enable us to dial back or disable animation for users with that setting enabled. Until that time, be mindful about enormous animations, and if you use them, provide users an option to disable them.






## How to evoke emotion with animation
#### SOC
* Great, so we have our building blocks. We understand how important timing, easing are. We know that squash and stretch and secondary action are important, but how does that actually serve us. How do we combine these to communicate a sensation to users. To try to get evoke the type of emotions we want our site/brand/whatever to evoke?
* Say your brand values are things like solidity, trustworthiness, thinking of like a bank or financial institution. Just because you have a Very Serious Brand doesn't mean that you should chuck away animation because it's some kind of frivolity. YOU CAN COMMUNICATE BRAND VALUES WITH ANIMATION. Giving up on animation because your brand is serious is just throwing away the most primal form of communication we have with users. Instead, think about how you can use animation to communicate solidity and trustworthiness. Think of real world items that evoke those same emotions in you. Maybe a big old heavy atlas book, maybe [[[some other things]]]. These things tend to be old, they tend to be heavy. Think about how they move or how you move them in the world, and design your animations to fit. [[something about how these animations would actually look]]
* Even if your brand values aren't descirbed by words like "energetic", "bouncey", "fun", "exuberant" and is more serious, this DOES NOT MEAN YOU SHOULD NOT USE ANIMATION. If your brand is serious, awesome. You can still use animation to communicate that. If you pass up this opportunity, you give up the chance to use animation to your advantage
##### Communicate
* Perhaps because our perception of animation happens at a lower level than other stimuli we encounter on the web, but we have an innate tendency to draw parallels between animation and the real world. When something moves we instinctually assign meaning and personality to it [[[thomas was alone, that study val cites]]]
* Humans are hard wired to anthropomorphize and assign life and meaning to even abstract shapes once they move. Famous study from smith college, Thobmas was alone.
##### The building blocks
* If we're going to use animation to evoke emotions in users, we're going to have to be much more intentional about the character of our animations, 
* Timing: more or less, duration
* Spacing: more or less, easing
* Timing kind of forms the function of an animation, make sure that people aren't excessively waiting for it to finish
* Spacing is all about the character of the animation; illustrate the effect spacing has on character via a bouncing ball [[demo]] similar to https://www.youtube.com/watch?v=KRVhtMxQWRs
* They DO work together though, depending on the easing you need different timing
* Anticipation & follow through: the more exaggerated these two things, the more engergy you impart the animation, the more playful it feels
* Secondary action: when moving a container, move the contents along with it, that's a common way to use secondary action to make your animation more grounded in the physical world
* Squash and stretch: As objects move through air, they deform a little bit. This elongation along the axis of motion also helps to visually give the appearance of a smoother animation (much as blurring does). Even a little squash/stretch can give your interface animation a huge amount of joi de vivre, but it's incredibly easy to fuck up. Don't NOT try, but be careful.
* Combining them into a palette
* Energetic/outgoing? Use animations with more springiness, use more generous overshoots/followthroughs. Soft overshoots feel friendly and energetic, sharp, quick overshoots though can show frenetic urgency. Be careful.
* Playful/friendly? Use more squash and stretch to make animations feel springy and elastic. Animations that look like they make the sound "boinngngngngngngng". Again, a little goes a long way.
* Decisive/self assured? Restrained ease-in-out is the way to go. They feel balanced, stable, physical, and weighty without being heavy. Like a large ball bearing.
* Calm/reserved/stable? Use smaller movements, less distance, shorter durations. Maybe choose to animate color, opacity, blur instead of using motion at all.

##### Brand level stuff
* Start with words. Look at how your company or your client's brand describes itself. Then find objects, characters, phenomena that embody those descriptors. Keep the way those things move as a touchstone as you create your animations. If you have trouble finding the words, look at company copywriting guidelines if they exist.
* I find it helpful to physically surround myself with the objects that evoke the same type of feeling as the animations I want to create. For example, I was working on animations for a national association, and felt animations should feel confident, decisive, stable, and smooth. I bought a heavy ball-bearing and kept it with me at all times when I was working on the project, so if I ever got stuck, I could pass it from hand to hand and get a sense of how it felt. [[throw it out in the audience]]. 
* If physical objects aren't your thing, try sounds or music. Val Head is a badass web animator, and she's a big fan of using a piece of music as a touchstone. Use the rhythm, form, sensations of the music and use that as a reference for your animations. Work until your animations feel "right" alongside that piece of music.
* Important to take a high level view when thinking about animation for your brand. A lot of time individual animations are made at the page or even component level without really considering how they fit together to tell a coherent story about your brand.
* You can approach this two ways, either looking at your current animations and designing an animation style guide around them, but it's pretty much always better to start from the ground up, fresh. That doesn't mean that you don't use what already works, but it's always best in my XP to have the *mindset* of starting from a blankish slate than it is to have the mindset of cobbling together what you've got.

## Integrating animation into your process
#### SOC
* I hope that I've sold you not only on the value animation has to design on the web, but how it can shape cognition and sensation more than other web design aspects. However, if you're not able to integrate animation into your team's design practice, none of that matters.
* Think about when you're displaying static comps, when you're explaining how a user moves from one state to another, if you ever feel like you're overexplaining or it requires a big explanation, it might leave users feeling like they need an explanation. Wordy explanations often mean something could be better shown than told. ehhh idk if thius belongs?
* Leaving animation to the end of a project makes the "surprise and delight" moniker a self fulfilling prophecy. It's difficult to implement meaningful animation at the end, so it does end up being reserved for random uncoordinated S&D, which people then point to the next time to devalue animation. It's up to us to break this cycle.
* Best way to advocate for animation process is to just start doing it. Do. Not. Wait. For. Permission. Show, don't tell. Once people see animated comps next to static ones, see your attention to detail by creating storyboards that describe transitions from one wireframe to another, in my experience they wont want to go back.
* Advocating for anim: don't do it alone. One voice is easy to dismiss as ugh, you're just the animation person can you shut up please so we can do our jobs? But if you get other folks excited about it too, it's much harder to sweep under the rug.
* When is the right time to start talking about animation? If you separate the wireframing and visual design stages, I start thinking about animation during the wireframe stage, yes, right at the beginning. Not so much the minute details of the animation, but its presence and purpose definitely.
* At this stage, the wireframing stage, I make storyboards of key animations that supplement the wireframes and describe interstitial states. Storyboards should be for internal use only. Describe what story boards are, what they look like in web animation.
* Musical notation: Val Head has had success with using musical notation to denote timing at this early storyboarding stage. Speaking as someone who's not musically inclined this hasn't helped me, but if you are it might help you.
* Visual design: Once we enter the visual design stage, things become a little more variable. I usually make prototypes right in code that illustrate animations and accompany visual designs, but I've seen framer.js, aftereffects, and even keynote prototypes work very well. When you're prototyping animation outside of the browser, you need to be careful to not fall in love with an animation that isn't feasible. At an agency gig, we did this really sweet gooey reveal of a logo, but I couldn't adequately execute on combining masks and gooey filters to make this happen. That gooey reveal ended up being exported as a gif, which was enormous and bad for performance, because once folks fell in love with the animation, they couldn't take nope for an answer.
* Collaboration: Collaboration is key. If you're on a team with a traditional split between front end and design, it's important to work on animations together. Designers? Animation inclined FEDs often have a lot of great ideas, have exposure to a lot of inspiration, and are able to iterate in code very quickly. Developers? Designers often have more context as to how animations fit into the larger experience, and if they have less experience building animations in code, that's actually a benefit! Designers will push you out of your comfort zone because they might suggest things that aren't easily implementable but are different and incredible. Even if your team isn't split like this, it's still very important to get other eyes on your animations, and to iterate together. Animation is more sensitive to the details of implementation than most facets of visual design, so it's important that designers and devlopers continue to partner closely throughout the process. Even if you are a hybrid, as many web animation folks are, consider partnering up with a non-coding designer. The best work I've ever produced was because of a great working relationship with an incredibly talented designer in Maggie Gaudean. She'd push me to come up with incredible things because she didn't know "the rules". I'd be like "pff that's not possible", then I'd come back an hour later being like nvm figured it out. 
* Styleguide: If you have a styleguide, documenting your animations there is *SUPER* important. Nobody would just decide to use a different typeface or different color, but when working on the fringes of the web design discipline, with things that are less well understood, a colleague might simply not know any better and create an animation that is not in keeping with your brand. It's important to not just show animation, giving example and code snippets, but to describe process, intent and vision in this document. Just putting animation in your style guide isn't enough, you need to go the extra mile if you want animation to gain traction in your organization.
* Styleguide: When documenting animtion, I find it best to group animation by the purpose they serve. Entrances, reveals, transitions, storytelling, personality flourishes, etc. I find it helpful to ALSO document the building blocks. What percentage opacities do you use. What range of durations? What easing curves? How do you animate in the Z space.
* Styleguide: That's a lot of documentation, but it matters and it makes a difference. Words on "paper" diffuse knowledge into the organization, and make it so you don't have to repeat yourself when advocating for animation.




## Strays
* Animation won't paper over bad design really, but it can make good design much better. ehhhhhhhh?
* Animation as affordance: Animation can be a fantastic way to hint or preview at what an action will do before a user clicks a button. If you have a UI with many panels, it can be helpful to signal to users what will open or close by doing a slight peek or tuck on hover. In drag and drop interfaces, especially when reording a list, animating elements around the dragged item to make room for a potential drop can give the user a real time preview of what will happen before they take action. This eases cognitive load of the action because expectations are set, the brain's processed what's going to happen before it happens. Especially valuable for new users; subtle animations can help them discover new actions without shouting at them or giving them a walkthrough. Examples: IOS camera on home screen, some hamburger menu somewhere[val]?, Clear[val]?
* Example of a springy energetic brand is dropbox paper [val][https://vimeo.com/162721550]; compared to medium, which is much more measured and restrained writing experience [val][https://vimeo.com/162721531]
* Surprise and delight examples: Yelp pull to refresh cat rocketship, medium clap animaiton....

## Post FITC Notes
* If your company/client/whatever is too "dignified" or "serious" for animation, think about what character the *lack* of animation has. It makes everything in your UI go "HEY" when it appears [do like a bend of the knees, jut your head forward, wave your arms]. Humans still ascribe character to motion, and we still naturally perceive things as changing over time, that's how we process information about the world. So when things snap into place, we perceive them as having moved or changed so fast we couldn't see it. It's jarring and unsettling, not dignified or serious. Quite the opposite.
* Call physical objects "totems" not "touchstones" just like from inception. Maybe even have a looping gif from inception of the totem spinning.


## Resources
* [codenewbie podcast with RN: cognitive load](https://www.codenewbie.org/podcast/what-and-why-is-web-animation)
* [Research: animation improves decisionmaking](http://courses.ischool.berkeley.edu/i247/s04/resources/p27-gonzalez.pdf)
* [Research: animation builds mental maps](http://www.cs.umd.edu/hcil/jazz/learn/papers/CS-TR-3964.pdf)
* [Presentation resource: good easing curves for gsap](https://codepen.io/GreenSock/pen/xEPaBg?editors=0010)
* [Eye stuff on wikipedia](https://en.wikipedia.org/wiki/Occipital_lobe)
* [Eye stuff on wikipedia 2](https://en.wikipedia.org/wiki/Two-streams_hypothesis)
* [Eye stuff on wikipedia 3](https://en.wikipedia.org/wiki/Vision_for_perception_and_vision_for_action)
* [vestibular examples] (https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)

### GSAP demos
https://codepen.io/elifitch/pen/5ec36ceee6e482225817ca8324406ac0
https://codepen.io/GreenSock/pen/ca2ed1319dc4818653d2a921dd2eaf94?editors=0010
https://codepen.io/GreenSock/pen/pRowwX?editors=0010
https://codepen.io/GreenSock/pen/xEPaBg?editors=0010