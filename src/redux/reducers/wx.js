const initialState = {
	wx: null
};

const getWx = (state = initialState, action = {}) => {

	switch(action.type) {
		case 'GET_WX_SUCCESS':
			return Object.assign({}, state, action.payload.data);
		default:
			return state;	
	}
 }

 export default getWx;