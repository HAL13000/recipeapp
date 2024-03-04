import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// const getToken = () => localStorage.getItem("token");
const axiosClient = axios.create({
  baseURL: BASE_URL,
});
// Prepare before API
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    // headers: {
    //   "Content-Type": "application/json",
    //   //   authorization: `Bearer ${getToken()}`,
    //   // リクエストヘッダーにJWTをつけてサーバーに渡す
    // },
  };
});
// request add interceptor
// interceptor =捕まえる　ここでは前処理などを捕まえる役割をしている
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    throw err.response;
  }
);
export default axiosClient;
