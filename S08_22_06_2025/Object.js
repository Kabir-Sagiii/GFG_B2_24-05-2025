var product = {
  brandName: "Apple",
  modelName: "MacBook Air",
  price: 90000,
  rating: 4.5,
};

// console.log(product);

//How to Access Property Value
// Dot
// bracket

// var productValue = product.modelName;
// var price = product["price"];
// console.log(productValue, price);

//Insert
// console.log(product);
// product.category = "Electronics";
// product["discount"] = "20%";
// console.log(product);

//update
// console.log(product);
// product.price = 40000;
// product["rating"] = 4.8;
// console.log(product);

//delete

delete product.price;
delete product["brandName"];
console.log(product);
