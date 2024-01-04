import PropTypes from "prop-types";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "./context/user_context";

const Form = ({ onSubmit }) => {
  const { users: data } = useContext(UserContext);

  useEffect(() => {
    if (data?.length) inputRef.current.focus();
  }, [data]);

  const inputRef = useRef(null);

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
      <input type="text" ref={inputRef} name="first_name" />
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
