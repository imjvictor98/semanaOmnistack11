import axios from "axios";

const api = axios.create({
  baseURL: "https://bethehero0.herokuapp.com"
});

export default api;
