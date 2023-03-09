import axios from 'axios';

//apply base url for axios
const API_URL = process.env.REACT_APP_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

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
