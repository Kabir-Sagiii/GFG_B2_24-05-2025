var data = [
  { name: "Iphone 16", price: 90000 },
  { name: "vivo 29 pro", price: 40000 },
  {
    name: "Samasung galaxy",
    price: 30000,
  },
  { name: "oneplus", price: 20000 },
];

var new_data = data.map(function (element) {
  //element = {name,price,rating}
  //[element]

  element.rating = 4.5;
  return element;
});

console.log(new_data);

// var newArray = [];
// data.forEach(function (element) {

//   element.rating = 4.5;
//   newArray.push(element);
// });

// console.log(newArray);
