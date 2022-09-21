import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // como o endereço é o mesmo o axios aproveita o `http://localhost:3000`
});
