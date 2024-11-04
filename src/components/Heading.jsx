import PropTypes from "prop-types";

function Heading({heading, paragraph=" "}) {
  return (
    <div className="text-center space-y-2 my-10">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <p className="text-slate-500">{paragraph}</p>
    </div>
  )
}

Heading.propTypes = {
    heading: PropTypes.string,
    paragraph: PropTypes.string,
  };

export default Heading
