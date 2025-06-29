function myFetch() {
  var promise = new Promise(function (resolve, reject) {
    reject({ ok: false, error: "Something went wrong" });
    // resolve([{ name: "GFG" }, { name: "Sagar" }]);
  });

  return promise;
}

const promiseObject = myFetch();
// console.log(obj);

promiseObject
  .then(function (successdata) {
    console.log("then");
    console.log(successdata);

    //Navigate Home Page
  })
  .catch(function (errordata) {
    console.log("catch");
    console.log(errordata);
    //Logic Error MEssage
  });
