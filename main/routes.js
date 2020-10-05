export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PMain
  },
  {
    path: '/about',
    exact: true,
    component: components.PMain
  }
]
