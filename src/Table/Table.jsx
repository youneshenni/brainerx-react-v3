import PropTypes from "prop-types";
import { useEffect, useReducer, useRef } from "react";
import tableReducer, { initialState } from "./reducer";
const Table = ({ data, onDelete, onUpdate, isGreen }) => {
  const [{ editingRow, editingUser }, dispatch] = useReducer(
    tableReducer,
    initialState
  );
  const genderRef = useRef(null);

  useEffect(() => {
    if (editingRow) {
      genderRef.current.focus();
    }
  }, [editingRow]);
  return (
    <table style={{ backgroundColor: isGreen ? "green" : "red" }}>
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
          editingRow === person.id && editingRow ? (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({
                      type: "editUser",
                      payload: {
                        key: "first_name",
                        value: e.target.value,
                      },
                    })
                  }
                  ref={genderRef}
                  value={editingUser?.first_name}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({
                      type: "editUser",
                      payload: {
                        key: "last_name",
                        value: e.target.value,
                      },
                    })
                  }
                  value={editingUser?.last_name}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({
                      type: "editUser",
                      payload: {
                        key: "email",
                        value: e.target.value,
                      },
                    })
                  }
                  value={editingUser?.email}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({
                      type: "editUser",
                      payload: {
                        key: "gender",
                        value: e.target.value,
                      },
                    })
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
                    dispatch({ type: "clearEditingUser" });
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
                    dispatch({ type: "setEditingRow", payload: person });
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
  isGreen: PropTypes.bool,
};

export default Table;
