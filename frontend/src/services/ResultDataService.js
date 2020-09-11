import http from "../http-common";

class ResultDataService {
  getAll() {
    return http.get("/results");
  }

  get(id) {
    return http.get(`/results/${id}`);
  }

  create(data) {
    return http.post("/results", data);
  }

}

export default new ResultDataService();