import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage/Homepage'

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

/*个人空间相关*/
import Space from '../components/Space/Space'
import Message from '../components/Space/Message/Message'
import Dynamics from '../components/Space/Dynamics/Dynamics'
import Collection from '../components/Space/Collections/Collection'
import CollectionDetail from '../components/Space/Collections/CollectionDetail'

import Manuscript from '../components/Space/Manuscript/Manuscript'
import MsHomepage from '../components/Space/Manuscript/MsHomepage'
import MsData from '../components/Space/Manuscript/MsData'
import Editing from '../components/Space/Manuscript/Editing'
import ManuManagement from '../components/Space/Manuscript/ManuManagement/ManuManagement'
import Manu from '../components/Space/Manuscript/ManuManagement/Manu'
import Video from '../components/Space/Manuscript/ManuManagement/Video'

import Friend from '../components/Space/Friend/Friend'
import Fans from '../components/Space/Friend/Fans'
import Focus from '../components/Space/Friend/Focus'

import Article from '../components/Articles/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/space',
      name:'Space',
      component:Space,
      children:[
        {
          path:'message',
          component:Message
        },
        {
          path: 'dynamics',
          component: Dynamics
        },
        {
          path:'collections',
          component:Collection,
          children:[
            {
              path:'detail/:id',
              component:CollectionDetail,
            }
          ]
        },
        {
          path:'manuscript',
          component:Manuscript,
          children:[
            {
              path:'mshomepage',
              component:MsHomepage,
            },
            {
              path:'msdata',
              component: MsData,
            },
            {
              path:'edit',
              component:Editing
            },
            {
              path:'management',
              component:ManuManagement,
              children:[
                {
                  path:'manu',
                  component:Manu,
                },
                {
                  path:'video',
                  component: Video,
                }
              ]
            },
          ]
        },
        {
          path:'friend',
          component:Friend,
          children:[
            {
              path: 'focus/:id',
              component: Focus,
            },
            {
              path:'fans',
              component: Fans,
            }
          ]
        }
      ]
    },
    {
      path:'/article/:id',
      component:Article
    },

  ]
})
