var data = [1, 2, 3, 4, 5, 6];

var newArray = data.filter(function (element, index) {
  var result = element > 2 && element < 5;
  return result; //[1,2,3]
});

console.log(newArray);
