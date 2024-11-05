import PropTypes from 'prop-types'
import { MdDeleteForever } from 'react-icons/md';

function Cart({ wish, product, handelRemove: handleDeleteFromCard }) {

    const { product_image: image, product_title: title, description, price } = product;



    return (
        <div className='flex gap-10 p-5 w-full shadow-xl rounded-xl bg-gray-100 items-center'>
            <div className='w-36'>
                <img src={image} alt="" className='rounded-xl' />
            </div>
            <div className='flex justify-between w-full'>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-slate-500'>{description}</p>
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    {
                        wish ? <button className="btn btn-sm rounded-full bg-main-color text-white hover:text-black">Add To Card</button> : ""
                    }
                </div>
                <button onClick={() => handleDeleteFromCard(product)} className='mr-12 text-4xl text-red-600'><MdDeleteForever /></button>
            </div>
        </div>
    )
}

Cart.propTypes = {
    product: PropTypes.object.isRequired,
    wish: PropTypes.bool,
    handelRemove: PropTypes.func,
}

export default Cart

