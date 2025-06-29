var user1 = {
  name: "sagar",
  id: 101,
  city: "pune",
};

var user2 = {
  ...user1,
  state: "MH",
  gender: "male",
};

// console.log(user1);
// console.log(user2);

var arr1 = [10, 20, 30, 40];
var arr2 = ["GFG", ...arr1, "sagar", true];

console.log(arr1);
console.log(arr2);
