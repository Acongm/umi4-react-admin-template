// new Promise((resolve) => {
//   console.log(1)
//   // resolve()
// }).then(() => {
//   console.log(2)
// })

const fn = () => {
  // return 1

  return new Proxy(
    { a: 1 },
    {
      get: () => {
        console.log('123');
      },
    },
  );
};
(async () => {
  // const bb = new Promise()
  // console.log(JSON.stringify(bb))
  const a = await fn();
  console.log(a);
})();
