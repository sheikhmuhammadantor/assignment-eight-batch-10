import SideBar from '../Category/SideBar';
import { Outlet } from 'react-router-dom';

function ProductBody() {



    return (
        <section>
            <h1 className='text-4xl text-center mb-16 mt-28'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-5'>
                <aside className=''>
                    <SideBar></SideBar>
                </aside>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default ProductBody
