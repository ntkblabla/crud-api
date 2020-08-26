import http from "../http-common";

class ExamBankDataService {
  getAll() {
    return http.get("/exambanks");
  }

  get(id) {
    return http.get(`/exambanks/${id}`);
  }

  create(data) {
    return http.post("/exambanks", data);
  }

  update(id, data) {
    return http.put(`/exambanks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/exambanks/${id}`);
  }

  deleteAll() {
    return http.delete(`/exambanks`);
  }

  findByTitle(title) {
    return http.get(`/exambanks?title=${title}`);
  }
}

export default new ExamBankDataService();