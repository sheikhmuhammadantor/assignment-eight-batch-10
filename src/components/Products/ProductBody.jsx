import SideBar from '../Category/SideBar';
import { Outlet } from 'react-router-dom';

function Products() {



    return (
        <section>
            <h1 className='text-4xl text-center mb-16 mt-28'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-5'>
                <aside className=''>
                    <SideBar></SideBar>
                </aside>
                <Outlet></Outlet>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
                    {
                        product.map((product) => <Product key={product.product_id} product={product}></Product>)
                    }
                </div> */}
            </div>
        </section>
    )
}

export default Products
