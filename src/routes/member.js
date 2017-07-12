
export default {
	path: 'member',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('VIEW/Member'))
		}, 'memberView')	
	},
	indexRoute: { //member
		getComponent (nextState, cb) {
	      	require.ensure([], (require) => {
	        	cb(null, require('COMPONENT/Member'))
	      	}, 'memberIndex')
	    }
	},
	childRoutes: [
		{
			path: 'register',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/register'))
		      	}, 'memberRegister')
		    }	
		},
		{
			path: 'stored',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/stored'))
		      	}, 'memberStored')
		    }	
		},
		{
			path: 'bill',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/Bill'))
		      	}, 'memberBill')
		    }	
		},
		{
			path: 'bill/detail',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/Bill/billdetail'))
		      	}, 'memberBillDetail')
		    }	
		},
		{
			path: 'paycode',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/paycode'))
		      	}, 'memberPayCode')
		    }	
		},
		{
			path: 'recharge',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/recharge'))
		      	}, 'memberRecharge')
		    }	
		},
		{
			path: 'recharge/payonline',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/payonline'))
		      	}, 'memberPayOnline')
		    }	
		},
		{
			path: 'perinfo',
			getComponent (nextState, cb) {
		      	require.ensure([], (require) => {
		        	cb(null, require('COMPONENT/Member/perinfo'))
		      	}, 'memberPerInfo')
		    }	
		}
	]
}