import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Product({ product }) {

  const { product_title, product_image, price, product_id } = product;

  return (
    <div>
      <div className="card shadow-xl border p-5">
        <figure className="">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p className="">Price: ${price}</p>
          <div className="card-actions">
            <NavLink to={`details/${product_id}`} className="btn btn-primary">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
