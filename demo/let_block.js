// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
//   }, 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//   }, 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//   }, 1000);
// }

// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//     }, 1000);
//   })(i);
// }
