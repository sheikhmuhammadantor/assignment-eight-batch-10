import { Link, NavLink } from "react-router-dom"
import { FaBarsStaggered, FaOpencart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

function NavBar() {

    const [links, setLinks] = useState(<></>);
    const basicStyle = `hover:border-b-2 font-medium text-white`
    useEffect(() => {
        setLinks(
            <>
                <NavLink to="/" className={({ isActive }) => `${basicStyle} ${isActive ? "border-b-2" : " "}`}>Home</NavLink>
                <NavLink to="/statistics" className={({ isActive }) => `${basicStyle} ${isActive ? "border-b-2" : " "}`}>Statistics</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => `${basicStyle} ${isActive ? "border-b-2" : " "}`}>Dashboard</NavLink>
            </>
        )
    }, [basicStyle]);

    return (
        <div className="navbar bg-main-color rounded-t-2xl py-3 px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <FaBarsStaggered></FaBarsStaggered>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-40 p-5 shadow gap-2 border-2">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-bold text-white">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 hidden sm:flex">
                <Link className="btn rounded-full hover:bg-main-color hover:text-white border-2"><FaOpencart></FaOpencart></Link>
                <Link className="btn rounded-full hover:bg-main-color hover:text-white border-2"><CiHeart></CiHeart></Link>
            </div>
        </div>
    )
}

export default NavBar