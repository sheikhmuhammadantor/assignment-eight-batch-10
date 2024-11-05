import PropTypes from 'prop-types'
import Product from './Product'
import { useContext, useEffect, useState } from 'react';
import { ProductDataContext } from '../../layouts/context';
import { useParams } from 'react-router-dom';

function FilterProduct() {

    const [product, setProduct] = useState([]);
    const productData = useContext(ProductDataContext)
    const { categoryName } = useParams()

    useEffect(() => {
        const newData = productData.filter((product) => product.category === categoryName)
        setProduct(newData);
    }, [categoryName, productData]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
            {
                product.map((product) => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    )
}

FilterProduct.propTypes = {
    product: PropTypes.array,
}

export default FilterProduct

