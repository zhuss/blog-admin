import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/login',
      name:'login',
      component: ()=> import('../views/Login.vue')
    },
    {
      path: '/',
      component: ()=> import('../views/Main.vue'),
      beforeEnter(to,fom,next){
        if(sessionStorage.getItem('account')){
          next();
        }else{
          next('login');
        }
      },
      children:[{
        path:'',
        redirect:'blogList'
      },{
        path:'blogList',
        name:'blogList',
        component: ()=> import('../views/blog/List.vue'),
      },{
        path:'blogEdit',
        name:'blogEdit',
        component: ()=> import('../views/blog/Edit.vue'),
      }]
    }
  ]
})
