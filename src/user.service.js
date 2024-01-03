const UserService = {
  getUsers: async () => {
    const response = await fetch("http://193.70.113.26:3000/");
    const data = await response.json();
    return data;
  },

  postUser: (user) => {
    return fetch("http://193.70.113.26:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
};

export default UserService;
