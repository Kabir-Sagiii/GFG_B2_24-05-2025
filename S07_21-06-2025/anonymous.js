var getUser = function (x, y) {
  //logic
  console.log("Working");
  return;
};

// getUser();

function f1(x) {
  console.log("f1 is called", x);

  x();
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

f1(function () {
  console.log("anonymous is called");
});
