import Layout from '@/Layout'
import MyIndex from '@/views/index'
const Login = () => import('@/views/login')
const routes = [
  {
    path: '/',
    component: Layout,
    mate: {
      icon: 'icon-geren1',
      title: '你好'
    },
    children: [
      {
        path: '/q',
        component: MyIndex
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
