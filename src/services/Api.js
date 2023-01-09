import axios from "axios";
import { toast } from "react-toastify";

const http = axios.create({
  baseURL: "https://6375dca77e93bcb006bbc984.mockapi.io/",
});

const URL = {
  USERS_URL: "table",
  SIGNUP_URL: "Signup",
  LOGIN_URL: "Login",
  TOKEN_URL: "tokens",
  IPD_URL: "ipd"
};

function getUser(data = {}) {
  return http.get(URL.USERS_URL, data);
};

function postUser(data = {}) {
  return http.post(URL.USERS_URL, data);
};

function deleteUser(data = {}) {
  return http.delete(URL.USERS_URL, data);
};

function postSignup(data = {}) {
  return http.post(URL.SIGNUP_URL, data);
};

function postLogin(data = {}) {
  return http.get(URL.TOKEN_URL, data);
};

function postIpdUser(data = {}) {
  return http.post(URL.IPD_URL, data);
}

function getIpdUser(data = {}){
  return http.get(URL.IPD_URL, data);
}

http.interceptors.request.use(config => {
  const token = sessionStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

http.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    if (status === 401) {
      toast.error('Unauthorized');     
    } else if (status === 200) {
      toast.success('success!');
      console.log("success")
    } else {
      toast.error('An error occurred');
    }
    return Promise.reject(error);
  }
);

const api = { postUser, getUser, deleteUser, postSignup, postLogin, http, postIpdUser, getIpdUser};

export default api;
