import PropTypes from "prop-types";
import { IoStar } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Product({ product, rating = false }) {

  const { product_title, product_image, price, product_id, rating: rat } = product;

  return (
    <div>
      <div className="card shadow-xl border p-5">
        <figure className="">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <Link to={`/details/${product_id}`} className="card-title text-2xl cursor-pointer hover:underline">{product_title}</Link>
          {
            rating ? <p className="flex gap-1 items-center"><span>Rating : </span><span className="font-semibold text-xl">{rat}</span><span className="mb-1 text-yellow-400 text-xl"><IoStar  /></span></p> : <p className="">Price: ${price}</p>
          }
          <div className="card-actions">
            <NavLink to={`/details/${product_id}`} className="btn rounded-full bg-transparent border-main-color text-main-color text-lg ">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  rating: PropTypes.bool,
}

export default Product
