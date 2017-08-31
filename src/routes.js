import Login from './containers/Login'
import Home from './containers/Home'
import Settings from './containers/Settings'

export const routes = [
  {
    pathname: '/',
    component: Login
  },
  {
    pathname: '/home',
    component: Home
  },
  {
    pathname: '/settings',
    component: Settings
  }
]
