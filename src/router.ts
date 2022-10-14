//Home
import Home from './home/pages/Home.vue'
//Bible Reader
import BibleReader from './bible/pages/BibleReader.vue'
import BibleSearch from './bible/pages/BibleSearch.vue'
//Account Management
import LogIn from './auth/pages/LogIn.vue'
import Register from './auth/pages/Register.vue'
import LogOut from './auth/pages/LogOut.vue'
//
import Commentaries from './commentaries/pages/Commentaries.vue'
//Sermons
import Sermons from './sermons/pages/Sermons.vue'
import SermonDetails from './sermons/pages/SermonDetails.vue'
import SermonAuthors from './sermons/pages/SermonAuthors.vue'
import SermonCategories from './sermons/pages/SermonCategories.vue'
import SermonAuthorCollection from './sermons/pages/SermonAuthorCollection.vue'
import SermonCategoryCollection from './sermons/pages/SermonCategoryCollection.vue'

//Devotionals
import Devotionals from './devotionals/pages/Devotionals.vue'
import DevotionalDetails from './devotionals/pages/DevotionalDetails.vue'
import DevotionalSearch from './devotionals/pages/DevotionalSearch.vue'

import UserDashboard from './user/pages/UserDashboard.vue'

import ComponentTestPage from './test/ComponentTestPage.vue'

import * as VueRouter from 'vue-router'
import Config from './config/services/ConfigService'

const routes = [
  { path: '/', component: Home },
  { path: '/bible', component: BibleReader },
  { path: '/bible/search', component: BibleSearch },

  { path: '/dashboard', component: UserDashboard },

  //Sermons
  { path: '/sermons', component: Sermons },
  { path: '/sermons/authors', component: SermonAuthors },
  { path: '/sermons/topics', component: SermonCategories },
  { path: '/sermons/authors/:authorId', component: SermonAuthorCollection },
  { path: '/sermons/topics/:categoryKey', component: SermonCategoryCollection },
  { path: '/sermons/:id', component: SermonDetails },

  //Devotionals
  { path: '/devotionals', component: Devotionals },
  { path: '/devotionals/search', component: DevotionalSearch },
  { path: '/devotionals/:id', component: DevotionalDetails },


  //Account Management
  { path: '/auth/log-in', component: LogIn },
  { path: '/auth/register', component: Register },
  { path: '/auth/log-out', component: LogOut },

  { path: '/study-tools/commentaries', component: Commentaries }
]

if (Config.environment === 'dev')
  routes.push({ path: '/test', component: ComponentTestPage })

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

export default router
