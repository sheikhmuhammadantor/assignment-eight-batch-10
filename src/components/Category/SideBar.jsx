import { useEffect, useState } from "react"
import Category from "./Category";

function SideBar() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`/category.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="flex flex-col gap-3 border p-4 rounded-2xl shadow-xl">
            {
                categories.map((category, idx) => <Category key={idx} category={category}></Category>)
                // category.map((cat) => <NavLink to={`/${cat.category_name}`} className={({ isActive }) => `${basicStyle} ${isActive ? "text-white bg-main-color" : " "}`} key={cat.category_name}>{cat.category_name}</NavLink>)
            }
        </div>
    )
}

export default SideBar
