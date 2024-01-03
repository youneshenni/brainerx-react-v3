import PropTypes from "prop-types";
import { useState } from "react";
const Table = ({ data, onDelete, onUpdate }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) =>
          editingRow === person.id ? (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      first_name: e.target.value,
                    })
                  }
                  value={editingUser?.first_name}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      last_name: e.target.value,
                    })
                  }
                  value={editingUser?.last_name}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  value={editingUser?.email}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, gender: e.target.value })
                  }
                  value={editingUser?.gender}
                />
              </td>
              <td>
                <button onClick={() => onDelete(person.id)}>Delete</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    onUpdate(editingUser);
                    setEditingRow(null);
                    setEditingUser(null);
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          ) : (
            <tr key={index}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>{person.gender}</td>
              <td>
                <button onClick={() => onDelete(person.id)}>Delete</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setEditingRow(person.id);
                    setEditingUser(person);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Table;
