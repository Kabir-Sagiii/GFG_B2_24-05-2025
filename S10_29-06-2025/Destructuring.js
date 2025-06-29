var arr = [10, 20, 30, 40];

var [a, _, b] = arr;

function f1() {
  var x = c;
  console.log(x);
}

function f2() {
  var y = c;
  console.log(y, b);
}

function f3() {
  var z = c;
  console.log(z);
}

f1();
f2();
f3();
