// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = { latitude: 0, longitude: 0 };
//     callback(data);
//   }, 3000);
// };

// geocode("Philadelphia", (data) => {
//   console.log(data);
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
