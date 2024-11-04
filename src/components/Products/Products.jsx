import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../../layouts/MainLayout";
import Product from "./Product";

function Products() {
    const [product, setProduct] = useState([]);
    const data = useContext(ProductDataContext)
    useEffect(() => {
        setProduct(data)
    }, [data]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
            {
                product.map((product) => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    )
}

export default Products
