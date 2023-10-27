import React from "react";

import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <>
      <h1>Products</h1>
      <h2>
        Electronic Items
        <ul>
          {props.Data.filter(
            (product) => product.category === "Electronics"
          ).map((item) => (
            <ProductItem
              key={item.productId}
              productId={item.productId}
              price={item.price}
              product_name={item.product_name}
              category={item.category}
              deleteData={props.setData}
            />
          ))}
        </ul>
      </h2>
      <h2>
        Food Items
        <ul>
          {props.Data.filter((product) => product.category === "Food").map(
            (item) => (
              <ProductItem
                key={item.productId}
                productId={item.productId}
                price={item.price}
                product_name={item.product_name}
                category={item.category}
                deleteData={props.setData}
              />
            )
          )}
        </ul>
      </h2>
      <h2>
        SkinCare Items
        <ul>
          {props.Data.filter((product) => product.category === "SkinCare").map(
            (item) => (
              <ProductItem
                key={item.productId}
                productId={item.productId}
                price={item.price}
                product_name={item.product_name}
                category={item.category}
                deleteData={props.setData}
              />
            )
          )}
        </ul>
      </h2>
    </>
  );
};

export default ProductList;
