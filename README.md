# Front-End Interview
## Algorithm
1. Two Sum

e.g.
Given `[2, 7, 11, 15]`, target is `9`, should return `[0, 1]`.

Answer:
```
function equal(first, second, target) {
  return first + second === target;
}

var twoSum = function(nums, target) {
  const length = nums.length;
  for (let i=0; i<length; i++) {
    const remain = length - i;
    for (let j=1; j<remain; j++) {
      if (equal(nums[i], nums[i+j], target)) {
        return [i, i+j];
      }
    }
  }
};
```

2. First Bad Version

Given an array of `[1, 2, ..., n]`. There is a bad version `k` between 1 and n, and all the versions after `k` are bad versions as well. Return the first bad versions.

e.g.

```
[1, 2, 3, 4, 5]
isBadVersion(3) === true;
return 3
```

Answer:

```
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var start = 1;
        var end = n;
        var results = [];

        var remain = function (start, end) {
            var result = [];

            if (end - start === 1) {
                if (isBadVersion(start)) {
                    end = start;
                    result.push(start, end);
                    return result;
                }
                else {
                    start = end;
                    result.push(start, end);
                    return result;
                }
            }

            var v = Math.round((start + end) / 2);

            if (isBadVersion(v)) {
                start = 1;
                end = v;
                result.push(start, end);
                return result;
            }
            else {
                start = v;
                end = end;
                result.push(start, end);
                return result;
            }
        };

        while (start !== end) {
            results = remain(start, end);
            start = results[0];
            end = results[1];
        }

        return start;

    };
};
```
## Front-End Basic
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

## JavaScript Basic
1. What is the output?
```
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```
Answer: 0, 1, 2, 3, 4

What to test:
* for loop, a simple start.

2. What is the output
```
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * i);
}
```
Answer: 5, 5(after 1 second), 5(after 1 second), 5(after 1 second), 5(after 1 second)

What to test:
* setTimeout is deferred execution
* clojure
* i has already been changed to 5 when setTimeout executed

3. How to make the above code output from 0 to 4?
Answer:
```
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
```
What to test:
* make a self executing anonymous function that execute within a clojure to keep private state

4. What is the output if I delete the i in function(i)?
```
for (var i = 0; i < 5; i++) {
  (function() {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
```
Answer: 5, 5(after 1 second), 5(after 1 second), 5(after 1 second), 5(after 1 second)

What to test:
* the internal clojure doesn't keep the reference of i so i will be 5 after the for loop

5. What is the output?
```
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  setTimeout(function() {
    resolve(4)
  }, 1000);
  console.log(3);
}).then(function(i) {
  console.log(i);
});
console.log(5);
```
Answer: 2, 3, 5, 1, 4

What to test:
* setTimeout is deferred execution
* statement within Promise will execute directly so 2, 3 will be printed
* console.log(5) execute after create the promise
* after execute all the other code, setTimeout execute
* after 1s promise resolve 4 into then function

6. What is the output? (bonus)
```
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  resolve(4)
  console.log(3);
}).then(function(i) {
  console.log(i);
});
console.log(5);
```
Answer: 2, 3, 5, 4, 1

What to test:
* synchronous promise resolve execute before asynchronous setTimeout

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
* Add a better BFF (backend for frontend) driven middleware layer, mainly in nodejs, to speed up product development
* Middleware can do routing, caching, intl, customization