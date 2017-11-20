# Front-End Interview
## Algorithm

## Front-End Basic
[FE_BASIC.md](./FE_BASIC.md)

## JavaScript Basic
[PROMISE.md](./PROMISE.md)
## React Components Design
1. Implement a Carousel component

What to test:
* Components separation: Slider, Slide, Dots, Arrows
* Props design: height, autoPlay, autoPlayInterval, vertical, animation, beforeChange, afterChange
* Implementation

2. Implement an Anchor(Affix) component 

What to test:
* remember to remain a placeholder component after make anchor component stick to top, because it will disrupt the old document flow from `position: relative` to `position: fixed`.
* Implementation

## Front-End Architecture
1. What is the benefit of segregating backend and frontend?

Answer:
* No more complex templates, both backend and frontend can gain more flexibility
* Backend development and frontend development can do in pipeline based on the agreement of a set of mock APIs according to product requirements

2. How to segregate backend and frontend with less pains?

Answer:
* Add a better BFF (backend for frontend) driven middleware layer, mainly in nodejs, to speed up product development.
* Middleware can do routing, caching, intl, customization.