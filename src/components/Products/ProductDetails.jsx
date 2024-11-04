import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductDataContext } from "../../layouts/MainLayout";

function ProductDetails() {

  const [categoryData, setCategoryData] = useState([]);
  const data = useContext(ProductDataContext)
const {productId} = useParams()
console.log(productId, data);

useEffect(() => {
  const machData = data.filter((product) => product.category === productId);
  setCategoryData(machData);
}, [data, productId]);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails
