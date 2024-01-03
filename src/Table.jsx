import PropTypes from "prop-types";
const Table = ({ data, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {data.map((person, index) => (
        <tr key={index}>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.email}</td>
          <td>{person.gender}</td>
          <td>
            <button onClick={() => onDelete(person.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
