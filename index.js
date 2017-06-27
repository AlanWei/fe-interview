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

var reverse = function(x) {
    const temp = x.toString().split('');
    let isNegative = false;
    let ro = '';
    const MAX = Math.pow(2, 31);
    temp.map((t) => {
      if (t === '-') {
        isNegative = true;
      } else {
        ro = `${t}${ro}`;
      }
    });
    if (ro > MAX) {
      return 0;
    }
    if (isNegative) {
      ro = -ro;
    }
    return parseInt(ro);
};