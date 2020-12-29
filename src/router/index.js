import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Posts from '@/components/Posts'
import Login from '@/components/Login'
import PostDetail from '@/components/PostDetail'
import OAuth2Redirect from '@/components/OAuth2Redirect'
import Logout from '@/components/Logout'
import PostCreate from '@/components/PostCreate'
import PostUpdate from '@/components/PostUpdate'

Vue.use(Router)

export default new Router({
  mode: 'history', // url에 # 없애기
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      props: true
    },
    {
      path: '/log-in',
      name: 'Login',
      component : Login
    },
    {
      path: '/post-detail/:postid',
      name: 'PostDetail',
      component: PostDetail,
      props: true
    },
    {
      path: '/oauth2redirect/:token',
      name: 'OAuth2Redirect',
      component: OAuth2Redirect,
      props: true
    },
    {
      path: '/log-out',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/post-create',
      name: 'PostCreate',
      component: PostCreate
    },
    {
      path: '/post-update',
      name: 'PostUpdate',
      component: PostUpdate
    },
  ]
})
