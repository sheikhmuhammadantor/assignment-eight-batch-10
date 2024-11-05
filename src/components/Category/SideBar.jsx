import { useEffect, useState } from "react"
import Category from "./Category";
import { NavLink } from "react-router-dom";

function SideBar() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const basicStyle = `btn text-base text-black rounded-full`

    return (
        <div className="flex flex-col gap-3 border p-4 rounded-2xl shadow-xl">
            {
                <NavLink to="/all" className={({ isActive }) => `${basicStyle} ${isActive ? "text-white bg-main-color" : " "}`}>All</NavLink>
            }
            {
                categories.map((category, idx) => <Category key={idx} category={category}></Category>)
            }
        </div>
    )
}

export default SideBar
