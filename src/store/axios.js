import axios from 'axios'
import store  from '../store'
import * as types from "./mutation-types";

// axios gloable setting
axios.defaults.timeout = 20000
axios.defaults.baseURL = 'http://localhost:3000/v1'

// http response interceptor
axios.interceptors.response.use(data => {
  return data
}, error => {
  store.commit(types.ERROR, error)
  return Promise.reject(error)
})

export default axios
