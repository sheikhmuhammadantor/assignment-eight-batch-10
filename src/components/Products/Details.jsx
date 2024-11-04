import PropTypes from 'prop-types'

function Details({ product }) {

    if (product) {
        // const { product_image, product_title, price, availability, description, specifications, rating } = product;
    }

    return (
        <div>
            <div className=''>
                <img src={product.product_image} alt="" />
            </div>
        </div>
    )
}

Details.propTypes = {
    product: PropTypes.object,
}

export default Details


