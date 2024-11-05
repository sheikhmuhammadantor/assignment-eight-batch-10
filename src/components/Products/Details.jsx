import PropTypes from 'prop-types'
// import ReactStars from "react-rating-stars-component";
// import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

function Details({ product }) {

    const { product_image: image, product_title: title, price, availability, description, specifications, rating } = product;

    return (
        <div className="border-2 rounded-2xl p-3 bg-white absolute lg:-bottom-80 -bottom-[720px] md:-bottom-96 left-1/2 transform -translate-x-1/2">
            <div className='flex flex-col gap-y-6 md:flex-row items-center lg:w-[850px] md:w-[630px] w-[70vw]'>
                <div className='max-w-md'>
                    <img src={image} alt={title} className='rounded-xl' />
                </div>
                <div className='text-left md:pl-5 pl-10 space-y-2'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-lg font-medium'>Price: ${price}</p>
                    <p className={`px-2 border inline-block rounded-full ${availability ? "text-green-500 border-green-500 bg-green-500 bg-opacity-5" : "text-red-500 border-red-400 bg-red-500 bg-opacity-5"}`}>{availability ? "In Stock" : "Out of Stock"}</p>
                    <p className='text-gray-500'>{description}</p>
                    <h2 className='text-lg font-semibold'>Specifications : <br /></h2>
                    <div className='list-none pl-2 text-gray-500'>
                        {
                            specifications?.map((obj, idx) => <li key={idx}>{idx + 1}. {(Object.values(obj))}</li>)
                        }
                    </div>
                    <h1 className='text-lg font-semibold'>Rating :</h1>
                    <p className='flex gap-2 items-center'>
                        {/* <Rating
                            emptySymbol={<CiStar></CiStar>}
                            fullSymbol={<FaStar></FaStar>}
                        /> */}
                        {/* <ReactStars count={5} size={24}></ReactStars> */}
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <span>{rating}</span>
                    </p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm bg-main-color text-white rounded-full px-4'> Add To Card  </button>
                        <button className='hover:bg-main-color hover:text-white text-main-color border rounded-full px-2 duration-500 hover:outline'> <FaRegHeart /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {
    product: PropTypes.object,
}

export default Details


