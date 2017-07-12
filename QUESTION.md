# Front-End Interview
## Algorithm
1. Two Sum

e.g.
Given `[2, 7, 11, 15]`, target is `9`, should return `[0, 1]`.

Answer:

2. First Bad Version

Given an array of `[1, 2, ..., n]`. There is a bad version `k` between 1 and n, and all the versions after `k` are bad versions as well. Return the first bad versions.

e.g.

```
[1, 2, 3, 4, 5]
isBadVersion(2) === false;
isBadVersion(3) === true;
return 3
```

Answer:

## Front-End Basic
1. What are the differences between jQuery and modern JS framework (Angular, React, Vue, especially React)?

Answer:

2. How to optimize front-end performance?

Answer:

## JavaScript Basic
1. What is the output?
```
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```
Answer:

2. What is the output
```
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * i);
}
```
Answer:

3. How to make the above code output from 0 to 4?

Answer:

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
Answer:

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
Answer:

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
Answer:

## React Components Design
1. Implement a Carousel component

2. Implement an Anchor(Affix) component 

## Front-End Architecture
1. What is the benefit of segregating backend and frontend?

Answer:

2. How to segregate backend and frontend with less pains?

Answer: