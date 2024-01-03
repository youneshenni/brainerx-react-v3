import { useState } from "react";
import Table from "./Table";
import { useEffect } from "react";
import UserService from "./user.service";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);

  function getUsers() {
    UserService.getUsers().then(setData);
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Form
        onSubmit={(createdUser) => {
          UserService.postUser(createdUser).then(getUsers);
        }}
      />
      <Table data={data} />
    </div>
  );
}
