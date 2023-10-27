import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setProductData(arr);
  }, []);
  const dataHandler = (data) => {
    setProductData((prevState) => [data, ...prevState]);
  };
  return (
    <div>
      <ProductForm onSubmit={dataHandler} />
      <ProductList Data={productData} setData={setProductData} />
    </div>
  );
}

export default App;
