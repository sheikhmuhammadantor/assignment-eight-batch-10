import PropTypes from "prop-types";

function Product({ product }) {
  return (
    <div>
      <h1>Product {product.product_id}</h1>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
