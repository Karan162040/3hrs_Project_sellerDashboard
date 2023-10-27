import React from "react";

const ProductItem = (props) => {
  const deleteHandler = () => {
    localStorage.removeItem(props.productId);
    props.deleteData((prevState) => {
      return prevState.filter(
        (product) => product.productId !== props.productId
      );
    });
  };
  return (
    <li>
      <span>{props.price}</span>
      <span> - </span>
      <span>{props.category}</span>
      <span> - </span>
      <span>{props.product_name}</span>
      <span> </span>
      <button onClick={deleteHandler}>Delete Product</button>
    </li>
  );
};

export default ProductItem;
