import { request } from '@/utils/request.js'
console.log(request)
export const login = (data) => {
  return request({
    method: 'post',
    url: '/user',
    data
  })
}
