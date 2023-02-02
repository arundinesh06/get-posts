import axios from "axios";
const postAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Creating an axios interceptor for request
postAPI.interceptors.request.use(
  (config) => {
    config = {
      ...config,
      headers: { "Content-Type": "application/json" },
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Creating an axios interceptor for response
postAPI.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default postAPI;
