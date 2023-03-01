import axios from 'axios';

// Bearer Access Token
const localeAuth: any = localStorage.getItem('authUser');
const authUser = localStorage.getItem('authUser')
  ? JSON.parse(localeAuth)
  : null;
const accessToken = 'Bearer ' + (authUser && authUser.accessToken) || '';

//pass new generated access token here
const token = accessToken;

//apply base url for axios
const API_URL = process.env.REACT_APP_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.headers.common['Authorization'] = token;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url: string, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function getFull(url: string, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

export async function patch(url: string, data: any, config = {}) {
  return axiosApi
    .patch(url, data, { ...config })
    .then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
