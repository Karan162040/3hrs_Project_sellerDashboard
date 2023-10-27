import React, { useRef } from "react";

const ProductForm = (props) => {
  const productIdInputRef = useRef();
  const priceInputRef = useRef();
  const productNameInputRef = useRef();
  const categoryInputRef = useRef();
  const billHandler = (event) => {
    event.preventDefault();
    const productData = {
      productId: productIdInputRef.current.value,
      price: priceInputRef.current.value,
      product_name: productNameInputRef.current.value,
      category: categoryInputRef.current.value,
    };

    props.onSubmit(productData);
    localStorage.setItem(productData.productId, JSON.stringify(productData));
    productIdInputRef.current.value = "";
    priceInputRef.current.value = "";
    productNameInputRef.current.value = "";
  };
  return (
    <div>
      <label htmlFor="product_id">Product ID : </label>
      <input type="number" id="product_id" ref={productIdInputRef} />
      <label htmlFor="price">Selling Price : </label>
      <input type="number" id="price" ref={priceInputRef} />
      <label htmlFor="product">Product Name : </label>
      <input type="text" id="product" ref={productNameInputRef} />
      <label htmlFor="category">Choose Category:</label>
      <select id="category" ref={categoryInputRef}>
        <option value="Electronics">Electronics</option>
        <option value="Food">Food</option>
        <option value="SkinCare">SkinCare</option>
      </select>
      <button onClick={billHandler}>Add Product </button>
    </div>
  );
};

export default ProductForm;
