import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const { id } = useParams(); // {id:3}
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    rating: { rate: 0, count: 0 },
    image: "",
    category: "",
    price: 0,
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  }, []);
  return (
    <div className="product-details">
      <div>
        <img src={product.image} alt="" width={"100%"} height={"400"} />
      </div>
      <div className="product-content">
        <dl>
          <dt>
            <strong>Product Title</strong>
          </dt>
          <dd>{product.title}</dd>

          <dt>
            <strong>Price</strong>
          </dt>
          <dd>{product.price}</dd>

          <dt>
            <strong>Category</strong>
          </dt>
          <dd>{product.category}</dd>

          <dt>
            <strong>Description</strong>
          </dt>
          <dd>{product.description}</dd>

          <dt>
            <strong>Rating</strong>
          </dt>
          <dd>{product.rating.rate}</dd>
        </dl>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
