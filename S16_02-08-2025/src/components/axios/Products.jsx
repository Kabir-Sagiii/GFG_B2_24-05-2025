import { useState } from "react";
import "./Products.css";
import { getProducts } from "./Products";
function Products() {
  const [products, setProducts] = useState([]);
  return (
    <div className="productsContainer">
      <h2>Products Information</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quod
        aliquam error voluptate magnam consequuntur, laboriosam sunt harum
        dolores. Provident ex totam, beatae rem aperiam minima nihil eius. Esse
        aliquam, amet obcaecati asperiores fugiat, corrupti hic illo impedit
        dolorem numquam similique perspiciatis nemo eos, ea repellat recusandae
        blanditiis minima labore quos quidem nesciunt! Nisi perferendis error
        sequi quisquam obcaecati nemo sunt eligendi quam rem ut hic aspernatur
        architecto ex tempora amet molestiae et voluptatem, assumenda tenetur
        porro iste. Consequuntur voluptate sapiente quae voluptas qui tempora
        maxime laboriosam alias perspiciatis, nam omnis expedita, facere in
        aliquam iste non velit sed natus!
      </p>
      <button
        onClick={() => {
          getProducts(setProducts);
        }}
      >
        Get Products
      </button>

      {products.length > 0 ? (
        <div>
          {products.map((product) => {
            return (
              <section>
                <img src={product.image} width={50} height={50} />
                <h4>{product.title}</h4>
                <hr />
              </section>
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", color: "red" }}>
          No Data to Display
        </h2>
      )}
    </div>
  );
}

export default Products;
