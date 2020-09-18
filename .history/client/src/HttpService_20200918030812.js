import axios from "axios";

const API_URL =
  window.location.hostname === "localhost" ? "http://localhost:3000/" : "none";

class HttpService {
  static header() {
    const token = localStorage.getItem("token");

    if (!token) return {};
    return {
      headers: {
        Authorization: token,
      },
    };
  }

  static async formData(url, formData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return await axios
      .post(`${API_URL}${url}`, formData, config)
      .then((resp) => resp);
  }

  static async post(url, params = {}) {
    return await axios
      .post(`${API_URL}${url}`, params, this.header())
      .then((res) => res);
  }

  static async get(url, params = {}) {
    const header = this.header();
    const paramWithHeader = { ...header };
    return axios.get(`${API_URL}${url}`, paramWithHeader).then((res) => res);
  }
}

export default HttpService;
