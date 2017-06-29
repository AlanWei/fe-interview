// setTimeout(function() {
//   console.log(1)
// }, 0);
// new Promise(function executor(resolve) {
//   console.log(2);
//   resolve(4)
//   console.log(3);
// }).then(function(i) {
//   console.log(i);
// });
// console.log(5);


for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}