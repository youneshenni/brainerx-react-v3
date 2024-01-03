import PropTypes from "prop-types";
const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {data.map((person, index) => (
        <tr key={index}>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.email}</td>
          <td>{person.gender}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
