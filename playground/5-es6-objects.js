// // Object property shorthand

// const myName = `Srijith`;

// const userAge = 25;

// const user = {
//   myName,
//   age: userAge,
//   location: "Chennai",
// };

// console.log(user);

const product = {
  label: "Red notebook",
  price: 30,
  stock: 201,
  salesPrice: undefined,
  ratings: 5,
};

// const {
//   label: prodLabel = "",
//   stock: prodStock = "",
//   salesPrice: price = "hell",
//   ratings: prodRatings = 4.2,
// } = product;

// console.log(prodLabel, prodStock, price, prodRatings);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction(`order`, product);
