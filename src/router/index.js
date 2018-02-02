import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/homepage'
import category from '@/components/category'
import me from '@/components/me'
import bookinfo from '@/components/bookinfo'
import reader from '@/components/reader'
import categorylist from '@/components/categorylist'
import bookranklist from '@/components/bookranklist'
import bookrank from '@/components/bookrank'
import search from '@/components/search'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
    {
    	path:'/',
    	name:'home',
    	component:home
    },
    {
    	path:'/category',
    	name:'category',
    	component:category
    },
    {
        path:'/rank',
        name:'rank',
        component:bookrank
    },
    {
    	path:'/me',
    	name:'me',
    	component:me
    },
    {
         path:'/categorylist',
         name:'categorylist',
         component:categorylist
    },
    {
        path:'/ranklist/:rankid',
        name:'ranklist',
        component:bookranklist
    },
    {
        path:'/bookinfo/:bookid',
        name:'bookinfo',
        component:bookinfo
    },
    {
        path:'/reader/:bookid',
        name:'reader',
        component:reader,
    },
    {
        path:'/search',
        name:'search',
        component:search
    }
  ]
})
