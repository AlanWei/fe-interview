# Promise
### 1
```
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)
```
```
1 2 4 3
```
Hints:

1. The construction function of Promise is synchronous execution.
2. `Promise.then()` is asynchronous execution.

### 2
```
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
```
```
then: success1
```
Hints:

1. Promise only has 3 status which are pending, fulfilled and rejected.
2. Only the first execution of resolve and reject is valid. Once promise's status has been determined, it cannot be changed.

### 3
```
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })
```
```
1
2
```
Hints:

1. Promise could be chained. Everytime `.then` or `.catch` is called will return a new promise.

### 4
```
Promise.resolve()
  .then(function success (res) {
    throw new Error('error')
  }, function fail1 (e) {
    console.error('fail1: ', e)
  })
  .catch(function fail2 (e) {
    console.error('fail2: ', e)
  })
```
```
fail2: Error: error
    at success (...)
    at ...
```
Hints:

1. The second parameter of `.then` cannot catch the error happen in the success function of the same level.
2. The following `.catch` could catch the error happen beforehand.

### 5
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
```
2
3
5
4
1
```
Hints:

1. One event loop can have one or many macrotask queues.
2. One event loop only has one microtask queue. Within one event loop, the microtask queue will be executed right after each macrotask completed.
3. A task will be pushed to either macrotask queue or microtask queue based on what it is.
4. `setTimout` is a macrotask and will be pushed to the macrotask queue.
5. `Promise.resolve` is a microtask and will be pushed to the microtask queue.

### Macrotasks
1. setTimeout
2. setInterval
3. setImmediate
4. requestAnimationFrame
5. I/O
6. UI rendering

### Microtasks
1. process.nextTick
2. Promises
3. Object.observe
4. MutationObserver