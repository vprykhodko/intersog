import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import DeatailsPage from './views/DeatailsPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
		  path: '/campaigns',
		  name: 'deatailsPage',
		  component: DeatailsPage,
		  props: route => ({routeParams: route.params})
		}
	]
})
