import { NavLink, Outlet } from "react-router-dom"
import Heading from "../components/Heading"


function Dashboard() {
  return (
    <section>
        <div className="bg-main-color rounded-b-2xl text-center py-8">
            <Heading heading="Dashboard" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
            <div className="flex gap-5 justify-center">
            <NavLink to="/dashboard" className="btn text-main-color text-lg rounded-full px-12">Cart</NavLink>
            <NavLink to="/dashboard/wishlists" className="btn text-main-color text-lg rounded-full px-12">Wishlist</NavLink>
            </div>
        </div>
        <Outlet></Outlet>
    </section>
)
}

export default Dashboard
