import PropTypes from 'prop-types'

function Cart() {
    return (
        <div className='flex gap-10 p-2 w-full shadow-xl'>
            <div>
                <img src="" alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <h1></h1>
                    <p></p>
                    <p></p>
                </div>
                <button>X</button>
            </div>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart

