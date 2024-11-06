import { NavLink, Outlet } from "react-router-dom"
import Heading from "../components/Heading"


function Dashboard() {

  const basicStyle = `btn rounded-full text-lg px-12`

  return (
    <section>
        <div className="bg-main-color rounded-b-2xl text-center py-8">
            <Heading heading="Dashboard" paragraph="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
            <div className="flex gap-5 justify-center">
            <NavLink to="/dashboard/carts" className={({ isActive }) => `${basicStyle} ${isActive ? "bg-white text-main-color" : "text-white bg-transparent"}`}>Cart</NavLink>
            <NavLink to="/dashboard/wishlists" className={({ isActive }) => `${basicStyle} ${isActive ? "bg-white text-main-color" : "text-white bg-transparent"}`}>Wishlist</NavLink>
            </div>
        </div>
        <Outlet></Outlet>
    </section>
)
}

export default Dashboard

//  text-main-color text-lg  px-12