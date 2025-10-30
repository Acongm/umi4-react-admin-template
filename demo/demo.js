let i = 0;
setTimeout(() => {
  console.log('log setTimeout');
});

const test = () => {
  console.log('test');
  i++;
  return Promise.resolve().then(() => {
    if (i < 10) {
      test();
    }
  });
};

test();

// console.log(s);
// var s = 'hello';
// function s () {
//   return 'hi';
// }
// console.log(s);
