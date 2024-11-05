import { useParams } from "react-router-dom"
import Details from "../components/Products/Details"
import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../layouts/MainLayout";
import Heading from "../components/Heading";

function ProductDetails() {

  const [product, setProduct] = useState({});
  const { id } = useParams()
  const data = useContext(ProductDataContext)

  useEffect(() => {
    if (!data) return;
    const obj = data.find((product) => product.product_id === id)
    setProduct(obj || {});
  }, [data, id]);

  return (
    <div>
      <div className="bg-main-color rounded-b-2xl sm:pt-12 pt-1 text-center lg:min-h-[400px] md:min-h-[430px] min-h-[380px] sm:min-h-[480px] relative mb-[650px] md:mb-72 lg:mb-80 lg:pb-0 sm:pb-32 pb-28">
        <Heading bool="true" heading="Product Details" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
        <Details product={product}></Details>
      </div>
    </div>
  )
}

export default ProductDetails
