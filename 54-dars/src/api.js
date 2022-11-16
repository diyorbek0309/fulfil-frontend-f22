import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// export const api2 = axios.create({
//   baseURL: "https://happi.dev/",
// });
