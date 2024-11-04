import { useContext, useEffect, useState } from 'react';
import { ProductDataContext } from '../../layouts/MainLayout';
import Product from './Product';
import SideBar from '../Category/SideBar';

function Products() {

    const [product, setProduct] = useState([]);
    const data = useContext(ProductDataContext)
    useEffect(() => {
        setProduct(data)
    }, [data]);

    return (
        <section>
            <h1 className='text-4xl text-center mb-16 mt-28'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-5'>
                <aside className=''>
                    <SideBar></SideBar>
                </aside>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
                    {
                        product.map((product) => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Products
