import { FaSortAmountDown } from "react-icons/fa"
import Cart from "./Cart"
import { useContext, useState } from "react";
import { CardDataContext } from "../../layouts/context";

function Carts() {

    const [cardData, setCardData] = useContext(CardDataContext);
    const [totalCost, setTotalCost] = useState(0);

    const handleDeleteFromCard = (deleteProduct) => {
        const newCardData = cardData.filter((product) => product.product_id !== deleteProduct.product_id);
        setCardData(newCardData);
    }

    return (
        <div>
            <div className="my-12 flex justify-between text-2xl font-semibold items-center">
                <h2>Cart</h2>
                <div className="flex items-center gap-4">
                    <h2 className="text-right">Total cost: {totalCost.toFixed(2)}</h2>
                    <button className="btn text-lg rounded-full outline outline-2 outline-main-color text-main-color bg-transparent">Sort By Price <FaSortAmountDown /></button>
                    <button className="btn text-lg rounded-full outline outline-2 bg-main-color outline-main-color text-white hover:text-black">Purchase</button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-8 mt-12">
                {
                    cardData.map((product) => <Cart wish={false} key={product.product_id} product={product} handelRemove={handleDeleteFromCard}></Cart>)
                }
            </div>
        </div>
    )
}

export default Carts
