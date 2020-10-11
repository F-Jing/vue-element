// 公共路由
const AccountLogin = () =>
  import(/* webpackChunkName: "account" */ "@/views/AccountLogin.vue");
const Error404 = () =>
  import(/* webpackChunkName: "error" */ "@/views/Error404.vue");
export default [
  {
    path: "/login",
    name: "AccountLogin",
    component: AccountLogin
  },
  {
    path: "/404",
    name: "Error404",
    component: Error404
  },
  // {
  //   path: "*",
  //   redirect: { name: "Error404" }
  // }
]