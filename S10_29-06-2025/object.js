var user = {
  name: "s1",
  gender: "male",
  id: 101,
};

var { name } = user;

// function f1() {
//   var x = id;
//   console.log(x, name);
// }

// function f2() {
//   var y = gender;
//   console.log(y);
// }

function f3() {
  var z = name;
  console.log(z);
}

// f1();
// f2();
f3();
