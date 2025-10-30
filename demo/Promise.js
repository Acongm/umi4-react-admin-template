Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  });

const p1 = [
  (() => {
    console.log(0);
    return Promise.resolve(4);
  }).then((res) => {
    console.log(res);
  }),
  (() => {
    console.log(1);
  })
    .then(() => {
      console.log(2);
    })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    }),
];
const p2 = [
  (() => {
    // console.log(0);
    return Promise.resolve(4);
  }).then((res) => {
    console.log(res);
  }),
  (() => {
    console.log(1);
  })
    .then(() => {
      console.log(2);
    })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    }),
];
const p3 = [
  Promise.resolve()
    .then(() => 4)
    .then((res) => res)
    .then((res) => {
      console.log(res);
    }),
  (() => {
    console.log(1);
  })
    .then(() => {
      console.log(2);
    })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    }),
];
const p4 = [
  (() => {
    console.log(1);
  })
    .then(() => {
      console.log(2);
    })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    }),
  (() => 4)
    .then((res) => res)
    .then((res) => {
      console.log(res);
    }),
];
const p5 = [
  (() => {
    console.log(2);
  })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    }),
  (() => 4)
    .then((res) => res)
    .then((res) => {
      console.log(res);
    }),
];
const c = [];

// new Promise((resolve) => {
//   console.log(1)
//   // resolve()
// }).then(() => {
//   console.log(2)
// })

// const fn = () => {
//   // return 1

//   return new Proxy(
//     { a: 1 },
//     {
//       get: () => {
//         console.log('123');
//       },
//     },
//   );
// };
// (async () => {
//   // const bb = new Promise()
//   // console.log(JSON.stringify(bb))
//   const a = await fn();
//   console.log(a);
// })();
