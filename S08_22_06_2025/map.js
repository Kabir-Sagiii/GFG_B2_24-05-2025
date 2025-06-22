var data = [1, 2, 3, 4, 5];

var newData = data.map(function (element, index) {
  var result = element * 10 + 500 * 56789;

  return result;
});

console.log(newData);
