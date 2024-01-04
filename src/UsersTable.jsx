import Table from "./Table";
import Form from "./Form";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "./context/user_context";
import Filter from "./Filter";

export default function UsersTable() {
  const {
    users: data,
    createUser,
    deleteUser,
    updateUser,
  } = useContext(UserContext);
  const [filter, setFilter] = useState("");
  const [isGreen, setIsGreen] = useState(false);

  const displayableData = useMemo(
    () =>
      data.filter((user) =>
        user.first_name?.toLowerCase().includes(filter.toLowerCase())
      ),
    [data, filter]
  );

  return (
    <div>
      <button onClick={() => setIsGreen(!isGreen)}>Change color</button>
      <Filter onChange={(filter) => setFilter(filter)} />
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
