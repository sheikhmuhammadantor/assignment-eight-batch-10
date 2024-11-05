import PropTypes from "prop-types";

function Heading({ heading, paragraph = " ", bool = "true" }) {
  return (
    <div className="text-center space-y-5 my-10 max-w-4xl mx-auto">
      <h1 className={`text-5xl font-bold ${bool ? "text-white" : "text-black"}`}>{heading}</h1>
      <p className={`px-8 ${bool ? 'text-gray-200' : "text-slate-500"}`}>{paragraph}</p>
    </div>
  )
}

Heading.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  bool: PropTypes.bool,
};

export default Heading
