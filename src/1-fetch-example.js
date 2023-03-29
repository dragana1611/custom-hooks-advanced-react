import React from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>Custom React Hooks</h2>
      <h2>{loading ? "loading..." : "products"}</h2>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img
                src={product.fields.image[0].url}
                alt={product.fields.name}
              />
              <h3> {product.fields.name}</h3>
              <h4>{product.fields.price}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
