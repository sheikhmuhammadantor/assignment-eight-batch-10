import { useContext } from "react"
import Cart from "./Cart"
import { CardDataContext, WishDataContext } from "../../layouts/context"
import { toast } from "react-toastify";

function WishLists() {

  const [wishData, setWishData] = useContext(WishDataContext);
  const [cardData, setCardData] = useContext(CardDataContext);


  const handleDeleteFromWishlist = (deleteProduct) => {
    const newWishData = wishData.filter((product) => product.product_id !== deleteProduct.product_id);
    setWishData(newWishData);
  }

  const addToCartFromWishList = (wishProduct) => {
    const isExist = cardData.find(data => data.product_id === wishProduct.product_id)
    if (isExist) {
      return toast.error("Product Already Exist !!", {
        position: "top-center",
        autoClose: 1000,
        draggable: true,
      });
    }

    const newCartData = [...cardData, wishProduct];
    setCardData(newCartData);

    const dataFromStore = localStorage.getItem("cost");
    const data = JSON.parse(dataFromStore);
    const totalCost = data + wishProduct.price;
    const costString = JSON.stringify(parseFloat(totalCost.toFixed(2)));
    localStorage.setItem("cost", costString);

    handleDeleteFromWishlist(wishProduct)
    return toast.success("Product Add To Cart  !!", {
      position: "top-center",
      autoClose: 1000,
      draggable: true,
    });
  }

  return (
    <div className="px-5">
      <div className="my-12 flex justify-between text-2xl font-semibold items-center">
        <h2>Wishlist</h2>
      </div>
      <div className="w-full flex flex-col gap-8 mt-12">
        {
          wishData.map((product) => <Cart wish={true} key={product.product_id} product={product} handelRemove={handleDeleteFromWishlist} addCard={addToCartFromWishList}></Cart>)
        }
      </div>
    </div>
  )
}

export default WishLists
