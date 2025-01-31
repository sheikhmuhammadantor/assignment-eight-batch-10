import { useParams } from "react-router-dom"
import Details from "../components/Products/Details"
import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../layouts/context";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";

function ProductDetails() {

  const [product, setProduct] = useState({});
  const { id } = useParams()
  const productData = useContext(ProductDataContext)

  useEffect(() => {
    if (!productData) return;
    const obj = productData.find((product) => product.product_id === id)
    setProduct(obj || {});
  }, [productData, id]);

  return (
    <div>
      <Helmet>
        <title>Product Details | GadgetHeaven✨</title>
      </Helmet>
      <div className="bg-main-color rounded-2xl sm:pt-12 pt-1 text-center lg:min-h-[400px] md:min-h-[430px] min-h-[380px] sm:min-h-[480px] relative mb-[650px] md:mb-72 lg:mb-80 lg:pb-0 sm:pb-32 pb-28">
        <Heading bool={true} heading="Product Details" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
        <Details product={product}></Details>
      </div>
    </div>
  )
}

export default ProductDetails
