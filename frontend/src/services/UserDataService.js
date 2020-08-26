import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

}

export default new UserDataService();