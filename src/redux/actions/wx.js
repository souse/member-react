import API from 'API';

const getWx = (obj) => {
	return {
		type: 'GET_WX',
		payload: {
			promise: API.get('/test/testRegister', { params: obj })
		}
	}
}

export default getWx;
