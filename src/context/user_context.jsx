import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserService from "../user.service";

const UserContext = createContext({
  data: [],
  deleteUser: () => {},
  updateUser: () => {},
  createUser: () => {},
});

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  function getUsers() {
    UserService.getUsers().then((users) => setUsers(users));
  }

  function createUser(user) {
    UserService.postUser(user).then(getUsers);
  }
  function updateUser(id, user) {
    UserService.updateUser(id, user).then(getUsers);
  }
  function deleteUser(id) {
    UserService.deleteUser(id).then(getUsers);
  }

  useEffect(getUsers, []);
  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
export { UserContext };
