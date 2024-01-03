import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.elements[0].value,
      last_name: e.target.elements[1].value,
      email: e.target.elements[2].value,
      gender: e.target.elements[3].value,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" />
      <input type="text" name="last_name" />
      <input type="text" name="email" />
      <input type="text" name="gender" />

      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
