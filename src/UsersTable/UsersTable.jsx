import Table from "../Table/Table";
import Form from "../Form";
import { useContext, useMemo, useReducer } from "react";
import { UserContext } from "../context/user_context";
import Filter from "../Filter";
import reducer, { initialState } from "./reducer";

export default function UsersTable() {
  const {
    users: data,
    createUser,
    deleteUser,
    updateUser,
  } = useContext(UserContext);
  const [{ isGreen, filter }, dispatch] = useReducer(reducer, initialState);

  const displayableData = useMemo(
    () =>
      data.filter((user) =>
        user.first_name?.toLowerCase().includes(filter.toLowerCase())
      ),
    [data, filter]
  );

  return (
    <div>
      <button onClick={() => dispatch({ type: "changeColor" })}>
        Change color
      </button>
      <Filter
        onChange={(filter) => dispatch({ type: "setFilter", payload: filter })}
      />
      <Form onSubmit={createUser} />
      <Table
        data={displayableData}
        onDelete={deleteUser}
        isGreen={isGreen}
        onUpdate={(updatedUser) => updateUser(updatedUser.id, updatedUser)}
      />
    </div>
  );
}
