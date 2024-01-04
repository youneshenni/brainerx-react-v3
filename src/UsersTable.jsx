import Table from "./Table";
import Form from "./Form";
import { useContext } from "react";
import { UserContext } from "./context/user_context";

export default function UsersTable() {
  const {
    users: data,
    createUser,
    deleteUser,
    updateUser,
  } = useContext(UserContext);
  return (
    <div>
      <Form onSubmit={createUser} />
      <Table
        data={data}
        onDelete={deleteUser}
        onUpdate={(updatedUser) => updateUser(updatedUser.id, updatedUser)}
      />
    </div>
  );
}
