import { useParams } from "react-router-dom"
import Details from "../components/Products/Details"
import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../layouts/MainLayout";

function ProductDetails() {

  const [product, setProduct] = useState({});
  const { id } = useParams()
  const data = useContext(ProductDataContext)
  console.log(data);

  useEffect(() => {
    if (!data) return;
    const obj = data.find((product) => product.product_id === id)
    setProduct(obj || {});
  }, [data, id]);

  return (
    <div>
      <Details product={product}></Details>
    </div>
  )
}

export default ProductDetails
