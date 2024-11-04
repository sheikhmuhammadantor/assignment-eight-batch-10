import { NavLink } from "react-router-dom"
import Heading from "./Heading"

function Hero() {
    return (
        <div className="bg-main-color rounded-b-2xl py-12 text-center min-h-[550px] relative">
            <Heading heading="Upgrade Your Tech Accessorize with Gadget Heaven Accessories" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
            <NavLink to="/" className="btn text-main-color text-lg rounded-full">Shop Now</NavLink>
        </div>
    )
}

export default Hero
