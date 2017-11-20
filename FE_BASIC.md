# Front-End Basic
1. What are the differences between jQuery and modern JS framework (Angular, React, Vue, especially React)?

Answer:
* Use virtual DOM to segregate direct DOM manipulation
* Use DOM diff algorithm to minimize DOM changes
* Better modularization, better for UI components abstraction
* Unidirectional data flow, parent to children, more controllable and predictable data flow

2. How to optimize front-end performance?

Answer:
* Minify js/css files (can ask more about building process, webpack etc.)
* css in header, js in body, because browser cannot do anything else while it is executing javascript (react fibre may change this through polyfill `requestIdleCallback`, if any candidates can mention this, bonus points will be given!)
* Compress image
* Properly use CDN, cache static files
* Properly control Cookie size, cache necessary data but don't make Cookie overloaded since each request will contain Cookie
* BONUS: lazyload components which doesn't show on the first screen
* BONUS: use app shell and loading animation to comfort users