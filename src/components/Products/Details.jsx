import PropTypes from 'prop-types'
import { useContext, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { CardDataContext, WishDataContext } from '../../layouts/context';
import { toast } from 'react-toastify';
import { FaOpencart } from 'react-icons/fa';


function Details({ product }) {

    const { product_image: image, product_title: title, price, availability, description, specifications, rating } = product;

    const [cardData, setCardData] = useContext(CardDataContext);
    const [wishData, setWishData] = useContext(WishDataContext);
    const [wishBtnDisable, setWishBtnDisable] = useState(false);

    const handelAddToCart = (product) => {
        const isExist = cardData.find(data => data.product_id === product.product_id)
        if (isExist) {
            return toast.error("Product Already Exist !!", {
                position: "top-center",
                autoClose: 1000,
                draggable: true,
            });
        }
        const newCartData = [...cardData, product];
        setCardData(newCartData)

        const dataFromStore = localStorage.getItem("cost");
        const data = JSON.parse(dataFromStore);
        const totalCost = data + product.price;
        const costString = JSON.stringify(parseFloat(totalCost.toFixed(2)));
        localStorage.setItem("cost", costString);

        return toast.success("Product Add To Cart  !!", {
            position: "top-center",
            autoClose: 1000,
            draggable: true,
        });
    }

    const handelAddWishlist = (product) => {
        const isExist = wishData.find(data => data.product_id === product.product_id)
        if (isExist) {
            return setWishBtnDisable(true);
        } setWishBtnDisable(true);

        const newWishData = [...wishData, product];
        setWishData(newWishData)

        return toast.success("Product Add To Wishlist  !!", {
            position: "top-center",
            autoClose: 1000,
            draggable: true,
        })
    }

    return (
        <div className="border-2 rounded-2xl p-3 bg-white absolute lg:-bottom-80 -bottom-[720px] md:-bottom-96 left-1/2 transform -translate-x-1/2">
            <div className='flex flex-col gap-y-6 md:flex-row items-center lg:w-[850px] md:w-[630px] w-[70vw]'>
                <div className='max-w-md'>
                    <img src={image} alt={title} className='rounded-xl' />
                </div>
                <div className='text-left md:pl-5 pl-10 space-y-2'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-lg font-medium'>Price: ${price}</p>
                    <p className={`px-2 border inline-block rounded-full ${availability ? "text-green-500 border-green-500 bg-green-500 bg-opacity-5" : "text-red-500 border-red-400 bg-red-500 bg-opacity-5"}`}>{availability ? "In Stock" : "Sold Out"}</p>
                    <p className='text-gray-500'>{description}</p>
                    <h2 className='text-lg font-semibold'>Specifications : <br /></h2>
                    <div className='list-none pl-2 text-gray-500'>
                        {
                            specifications?.map((obj, idx) => <li key={idx}>{idx + 1}. {(Object.values(obj))}</li>)
                        }
                    </div>
                    <h1 className='text-lg font-semibold'>Rating :</h1>
                    <div className='flex gap-2 items-center'>
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
                        <span>{rating}</span>
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={() => handelAddToCart(product)} className='btn btn-sm bg-main-color text-white rounded-full px-4'> Add To Card<span className='text-xl'><FaOpencart /></span></button>
                        <button onClick={() => handelAddWishlist(product)} className='hover:bg-main-color hover:text-white text-main-color border rounded-full px-2 duration-500 hover:outline disabled:bg-main-color disabled:text-white disabled:opacity-60' disabled={wishBtnDisable}> <FaRegHeart /> </button>
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
