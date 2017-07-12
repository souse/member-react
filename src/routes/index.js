/**
 * 主路由输出口
 */

export default {
	path: '/',
	component: require('COMPONENT/App'),
	indexRoute: {
	    component: require('COMPONENT/Index')
	},
	childRoutes: [
		require('./member')	
	]
}