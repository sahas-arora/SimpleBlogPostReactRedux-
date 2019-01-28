import axios from "axios";

let URL = "https://jsonplaceholder.typicode.com";

export default axios.create({
  baseURL: URL
});
