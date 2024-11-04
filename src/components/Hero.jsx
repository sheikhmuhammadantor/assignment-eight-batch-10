import { NavLink } from "react-router-dom"
import Heading from "./Heading"
import { useContext, useEffect, useState } from "react"
import { ProductDataContext } from "../layouts/MainLayout"
import Product from "./Product"

function Hero() {

    const [product, setProduct] = useState([]);
    const data = useContext(ProductDataContext)
    useEffect(() => {
        setProduct(data)
    }, [data]);

    return (
        <section>
            <div className="bg-main-color rounded-b-2xl py-12 text-center min-h-[550px] relative">
                <Heading heading="Upgrade Your Tech Accessorize with Gadget Heaven Accessories" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
                <NavLink to="/" className="btn text-main-color text-lg rounded-full">Shop Now</NavLink>
            </div>
            <div>
                <h1>Explore Cutting-Edge Gadgets</h1>
                <div>
                    {

                        product.map((product) => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero
