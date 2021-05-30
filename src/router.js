import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home.vue"
import Employers from "./pages/Employers.vue"
import Employer from "./pages/Employer.vue"


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/employers', component: Employers },
      { path: '/employer/:id', component: Employer }
    ]
  })