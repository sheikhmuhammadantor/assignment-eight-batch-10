import { FaSortAmountDown } from "react-icons/fa"
import Cart from "./Cart"
import { useContext, useEffect, useRef, useState } from "react";
import { CardDataContext } from "../../layouts/context";
import successImage from '/assets/success.png'
import { useNavigate } from "react-router-dom";


function Carts() {

    const [cardData, setCardData] = useContext(CardDataContext);
    const [totalCost, setTotalCost] = useState(0);
    const [btnDisable, setBtnDisable] = useState(false);
    const purchaseModal = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const dataFromStore = localStorage.getItem("cost");
        const cost = JSON.parse(dataFromStore);
        setTotalCost(cost);
        if (!cardData.length) {
            localStorage.setItem('cost', JSON.stringify(0));
            setBtnDisable(true)
        }
    }, [cardData]);

    const handleDeleteFromCard = (deleteProduct) => {
        const newCardData = cardData.filter((product) => product.product_id !== deleteProduct.product_id);
        setCardData(newCardData);

        const dataFromStore = localStorage.getItem("cost");
        const data = JSON.parse(dataFromStore);
        const costTotal = data - deleteProduct.price;
        setTotalCost(costTotal);
        const costString = JSON.stringify(parseFloat(costTotal.toFixed(2)));
        localStorage.setItem("cost", costString);
    }

    const handleSortByPrice = () => {
        const newSortCardData = [...cardData].sort((a, b) => b.price - a.price);
        setCardData(newSortCardData);
    }

    const handelPurchase = () => {
        setCardData([]);
        purchaseModal.current.showModal();
    }

    const handelModalClose = () => {
        setTotalCost(0);
        navigate("/")
    }

    return (
        <div className="px-5">
            <div className="my-12 flex justify-between text-2xl font-semibold items-center">
                <h2>Cart</h2>
                <div className="flex items-center gap-4">
                    <h2 className="text-right">Total cost: {totalCost.toFixed(2)}</h2>
                    <button onClick={() => handleSortByPrice()} className="btn text-lg rounded-full outline outline-2 outline-main-color text-main-color bg-transparent disabled:text-main-color disabled:opacity-60" disabled={btnDisable}>Sort By Price <FaSortAmountDown /></button>
                    <button onClick={() => handelPurchase()} className="btn text-lg rounded-full outline outline-2 bg-main-color outline-main-color text-white hover:text-black disabled:bg-main-color disabled:text-white disabled:opacity-60 disabled:outline-offset-2" disabled={btnDisable}>Purchase</button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-8 mt-12">
                {
                    cardData.map((product) => <Cart wish={false} key={product.product_id} product={product} handelRemove={handleDeleteFromCard}></Cart>)
                }
            </div>
            {/* Modal Code - */}
            <dialog id="purchaseModal" ref={purchaseModal} className="modal">
                <div className="modal-box text-center">
                    <div className="">
                        <img className="mx-auto" src={successImage} alt="Success Icon" />
                        <h3 className="font-semibold text-3xl text-center my-3">Payment Successful</h3>
                        <div className="divider"></div>
                        <p className="">Thanks for Purchasing</p>
                        <p>Total : {totalCost.toFixed(2)}</p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className="w-full">
                            <button onClick={() => handelModalClose()} className="btn px-12">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Carts
