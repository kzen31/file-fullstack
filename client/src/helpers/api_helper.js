import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => console.log(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

// export async function get(url, config = {}) {
//   return axios.get(process.env.REACT_APP_DATABASEURL + url, { ...config })
//     .then(response => response.data)
//     .catch(error => {
//       throw error
//     });
// }

export async function post(url, data, config = {}) {
  return axios.post(process.env.REACT_APP_DATABASEURL + url, { ...data }, { ...config })
    .then(response => response.data)
    .catch(error => {
      throw error
    });
}


export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

// export async function put(url, data, config = {}) {
//   return axios.put(process.env.REACT_APP_DATABASEURL + url, { ...data }, { ...config })
//     .then(response => response.data)
//     .catch(error => {
//       throw error
//     });
// }

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}

// export async function del(url, config = {}) {
//   return await axios.delete(process.env.REACT_APP_DATABASEURL + url, { ...config })
//   .then(response => response.data)
//     .catch(error => {
//       throw error
//     });
// }
