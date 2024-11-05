import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Category({ category }) {

  const basicStyle = `btn text-base text-black rounded-full`
  const { category_name: name } = category;

  return (
    <NavLink to={`/home/${name}`} className={({ isActive }) => `${basicStyle} ${isActive ? "text-white bg-main-color" : " "}`}>{name}</NavLink>
  )
}

Category.propTypes = {
  category: PropTypes.object,
}

export default Category

