import { useContext, useEffect, useState } from "react"
import { ProductDataContext } from "../layouts/context"
import Product from "../components/Products/Product";
import { Helmet } from "react-helmet";

function MostPopular() {

  const productData = useContext(ProductDataContext)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const sortProductData = productData.sort((a, b) => b.rating - a.rating);
    const sliceProductData = sortProductData.slice(0, 8);
    setProduct(sliceProductData);
  }, [productData]);

  return (
    <div>
      <Helmet>
        <title>Most Popular | GadgetHeaven✨</title>
      </Helmet>
      <h1 className="text-4xl font-semibold text-center my-12">Our Most Popular Product - By Rating</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
        {
          product.map((product) => <Product key={product.product_id} product={product} rating={true}></Product>)
        }
      </div>
    </div>
  )
}

export default MostPopular
