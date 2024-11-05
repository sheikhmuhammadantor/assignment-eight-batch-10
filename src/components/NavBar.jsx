import { Link, NavLink, useLocation } from "react-router-dom"
import { FaBarsStaggered, FaOpencart } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CardDataContext, WishDataContext } from "../layouts/context";

function NavBar() {

    const [wishData] = useContext(WishDataContext);
    const [cardData] = useContext(CardDataContext);

    const location = useLocation()
    const [navStyle, setNavStyle] = useState(true);
    const [links, setLinks] = useState(<></>);
    const basicStyle = `hover:border-b-2 font-medium`

    useEffect(() => {
        if (location) {
            const pathname = location.pathname;
            const homePath = pathname.slice(0, 5);

            if (homePath === '/') {
                setNavStyle(false)
            } else if (homePath === '/home') {
                setNavStyle(false)
            } else {
                setNavStyle(true)
            }
        }
    }, [location]);

    useEffect(() => {
        setLinks(
            <>
                <NavLink to="/" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black border-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Home</NavLink>
                <NavLink to="/popular" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black border-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Most Popular</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black border-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Dashboard</NavLink>
                <NavLink to="/statistics" className={({ isActive }) => `${basicStyle} ${navStyle ? "text-black border-black" : "text-white"} ${isActive ? "border-b-2" : " "}`}>Statistics</NavLink>
            </>
        )
    }, [navStyle, basicStyle])

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
                <button className="relative">
                    <Link className={`btn rounded-full border-gray-400 ${navStyle ? "hover:bg-white hover:text-black" : "hover:bg-main-color hover:text-white border"}`}>
                        <span className="absolute -top-2 -right-2 bg-white text-main-color border rounded-full p-1 px-2">{cardData.length}</span>
                        <FaOpencart></FaOpencart>
                    </Link>
                </button>
                <button className="relative">
                    <Link className={`btn rounded-full border-gray-400 ${navStyle ? "hover:bg-white hover:text-black" : "hover:bg-main-color hover:text-white border relative"}`}>
                        <span className="absolute -top-2 -right-2 bg-white text-main-color border rounded-full p-1 px-2">{wishData.length}</span>
                        <CiHeart></CiHeart>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default NavBar
