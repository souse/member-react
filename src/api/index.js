import Api from './api';

const NODE_ENV = process.env.NODE_ENV;
const origin = window.location.origin;
//const DoMain = NODE_ENV == 'production' ? origin : 'http://192.168.0.235:8090';
const DoMain = 'http://management-api.test.chupinxiu.com';
const baseURI = DoMain + '/wx';

const api = new Api({
  baseURI: baseURI
  /**
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  **/
})

export default api;
export { baseURI };