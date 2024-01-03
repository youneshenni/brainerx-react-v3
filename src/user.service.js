export default class UserService {
  static async getUsers() {
    const response = await fetch("http://193.70.113.26:3000/");
    const data = await response.json();
    return data;
  }

  static postUser(user) {
    return fetch("http://193.70.113.26:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
}
