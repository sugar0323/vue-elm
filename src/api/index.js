import axios from 'axios';
//import store from '../vuex'

let localURL = "http://localhost:8080/";
axios.defaults.baseURL = localURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
	//获取全部商品
	getGoods(){
		return axios.get('../../public/all.json');
	}
}
