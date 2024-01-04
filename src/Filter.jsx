import PropTypes from "prop-types";

export default function Filter({ onChange }) {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
