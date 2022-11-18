import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://www.suwei.site:81',
  timeout: 5000
})

request.interceptors.request.use(config => {
  return config
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use(data => {
  return data.data
}, error => {
  return Promise.reject(error)
})
