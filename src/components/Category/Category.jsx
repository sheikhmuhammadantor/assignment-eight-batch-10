import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Category({ name }) {

  const basicStyle = `btn text-base text-black rounded-full`

  return (
    <NavLink to={`/${name}`} className={({ isActive }) => `${basicStyle} ${isActive ? "text-white bg-main-color" : " "}`}>{name}</NavLink>
  )
}

Category.propTypes = {
  name: PropTypes.string,
}

export default Category

