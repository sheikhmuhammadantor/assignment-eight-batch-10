import { useContext } from "react"
import Cart from "./Cart"
import { WishDataContext } from "../../layouts/context"

function WishLists() {

  const [wishData] = useContext(WishDataContext);

  return (
    <div>
      <div className="my-12 flex justify-between text-2xl font-semibold items-center">
        <h2>Wishlist</h2>
      </div>
      <div className="w-full flex flex-col gap-8 mt-12">
        {
          wishData.map((product) => <Cart wish={true} key={product.product_id} product={product}></Cart>)
        }
      </div>
    </div>
  )
}

export default WishLists
