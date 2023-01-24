import axios from 'axios'
import store  from '../store'
import * as types from "../store/mutation-types";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API ,
  timeout: 20000 // axios gloable setting
})

// 拦截http响应
service.interceptors.response.use(data => {
  return data
}, error => {
  store.commit(types.ERROR, error)
  return Promise.reject(error)
})

export default service
