import { FaSortAmountDown } from "react-icons/fa"
import Cart from "./Cart"
import { NavLink } from "react-router-dom"

function Carts() {
    return (
        <div>
            <div className="my-12 flex justify-between text-2xl font-semibold">
                <h2>Cart</h2>
                <div className="flex items-center gap-4">
                    <h2 className="">Total cost: 000.00</h2>
                    <button className="btn text-lg rounded-full outline outline-2 outline-main-color text-main-color bg-transparent">Sort By Price <FaSortAmountDown /></button>
                    <button className="btn text-lg rounded-full outline outline-2 bg-main-color outline-main-color text-white hover:text-black">Purchase</button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-6 mt-12">
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
            </div>
        </div>
    )
}

export default Carts
