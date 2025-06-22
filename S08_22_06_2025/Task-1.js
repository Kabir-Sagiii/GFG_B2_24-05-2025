const people = [
  { id: 1, name: "Alice", city: "New York", gender: "Female" },
  { id: 2, name: "Bob", city: "Los Angeles", gender: "Male" },
  { id: 3, name: "Charlie", city: "Chicago", gender: "Male" },
  { id: 4, name: "Diana", city: "Houston", gender: "Female" },
  { id: 5, name: "Ethan", city: "Phoenix", gender: "Male" },
  { id: 6, name: "Fiona", city: "Philadelphia", gender: "Female" },
  { id: 7, name: "George", city: "San Antonio", gender: "Male" },
  { id: 8, name: "Hannah", city: "San Diego", gender: "Female" },
  { id: 9, name: "Ian", city: "Dallas", gender: "Male" },
  { id: 10, name: "Julia", city: "San Jose", gender: "Female" },
  { id: 11, name: "Kevin", city: "Austin", gender: "Male" },
  { id: 12, name: "Laura", city: "Jacksonville", gender: "Female" },
  { id: 13, name: "Mike", city: "Fort Worth", gender: "Male" },
  { id: 14, name: "Nina", city: "Columbus", gender: "Female" },
  { id: 15, name: "Oscar", city: "Charlotte", gender: "Male" },
  { id: 16, name: "Paula", city: "San Francisco", gender: "Female" },
  { id: 17, name: "Quentin", city: "Indianapolis", gender: "Male" },
  { id: 18, name: "Rachel", city: "Seattle", gender: "Female" },
  { id: 19, name: "Steve", city: "Denver", gender: "Male" },
  { id: 20, name: "Tina", city: "Washington", gender: "Female" },
  { id: 21, name: "Umar", city: "Boston", gender: "Male" },
  { id: 22, name: "Vera", city: "El Paso", gender: "Female" },
  { id: 23, name: "Will", city: "Detroit", gender: "Male" },
  { id: 24, name: "Xena", city: "Nashville", gender: "Female" },
  { id: 25, name: "Yusuf", city: "Memphis", gender: "Male" },
  { id: 26, name: "Zara", city: "Portland", gender: "Female" },
  { id: 27, name: "Adam", city: "Oklahoma City", gender: "Male" },
  { id: 28, name: "Bella", city: "Las Vegas", gender: "Female" },
  { id: 29, name: "Carl", city: "Louisville", gender: "Male" },
  { id: 30, name: "Daisy", city: "Baltimore", gender: "Female" },
];

// for (var x = 0; x < people.length; x++) {
//   console.log(people[x]);
// }

// function getElements(index) {
//   console.log(people[index]);
// }

// for (var x = 0; x < people.length; x++) {
//   getElements(x);
// }

// var data = [1, 2, 3, 4, 5, 6];

people.forEach(function (element, index) {
  if (index < 10) {
    console.log(element);
  }
});
