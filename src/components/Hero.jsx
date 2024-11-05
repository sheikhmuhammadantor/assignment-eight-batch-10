import { NavLink } from "react-router-dom"
import Heading from "./Heading"
import HeroImage from "./HeroImage"

function Hero() {
    return (
        <section>
            <div className="bg-main-color rounded-b-2xl sm:pt-12 pt-1 text-center lg:min-h-[550px] min-h-[480px] relative mb-40 sm:mb-60 lg:mb-80 lg:pb-0 sm:pb-32 pb-28">
                <Heading heading="Upgrade Your Tech Accessorize with Gadget Heaven Accessories" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
                <NavLink to="/dashboard" className="btn text-main-color text-lg rounded-full">Shop Now</NavLink>
                <HeroImage></HeroImage>
            </div>
        </section>
    )
}

export default Hero
