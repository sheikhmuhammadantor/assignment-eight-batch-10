import { Link, NavLink, useLocation } from "react-router-dom"
import { FaBarsStaggered, FaOpencart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

function NavBar() {

    const location = useLocation()
    const [navStyle, setNavStyle] = useState(true);
    const [links, setLinks] = useState(<></>);
    const basicStyle = `hover:border-b-2 font-medium`

    useEffect(() => {
        if (location) {
            location?.pathname === "/" ? setNavStyle(false) : setNavStyle(true);
        }
        setLinks(
            <>
                <NavLink to="/" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Home</NavLink>
                <NavLink to="/products" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Products</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Dashboard</NavLink>
                <NavLink to="/statistics" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Statistics</NavLink>
            </>
        )
    }, [basicStyle, navStyle, location]);

    return (
        <div className={`navbar rounded-t-2xl py-3 px-12 ${navStyle ? "bg-white" : "bg-main-color"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${navStyle ? "text-black" : "text-white"}`}>
                        <FaBarsStaggered></FaBarsStaggered>
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-40 p-5 shadow gap-2 border-2 ${navStyle ? "bg-white" : "bg-main-color"}`}>
                        {links}
                    </ul>
                </div>
                <Link to="/" className={`btn btn-ghost text-2xl font-bold break-words ${navStyle ? "text-black" : "text-white"}`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 gap-5`}>
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 hidden sm:flex">
                <Link className={`btn rounded-full border-gray-400 ${navStyle ? "hover:bg-white hover:text-black" : "hover:bg-main-color hover:text-white border"}`}><FaOpencart></FaOpencart></Link>
                <Link className={`btn rounded-full border-gray-400 ${navStyle ? "hover:bg-white hover:text-black" : "hover:bg-main-color hover:text-white border"}`}><CiHeart></CiHeart></Link>
            </div>
        </div>
    )
}

export default NavBar
