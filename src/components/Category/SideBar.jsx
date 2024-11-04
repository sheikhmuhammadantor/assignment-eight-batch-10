import { useEffect, useState } from "react"
import Category from "./Category";

function SideBar() {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`/category.json`)
        .then(res => res.json())
        .then(data => setCategory(data))
    }, []);
    

    return (
        <div className="flex flex-col gap-3 border p-4 rounded-2xl shadow-xl">
            {
                category.map((cat) => <Category key={cat.category_id} name={cat.category_name}></Category>)
            }
        </div>
    )
}

export default SideBar
