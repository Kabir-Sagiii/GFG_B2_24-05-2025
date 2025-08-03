import axios from "axios";

export function getProducts(setProducts) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}
