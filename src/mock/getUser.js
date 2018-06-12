import Mock from 'mockjs'
//import {seller} from "@/public/seller.json";
const userData = {
	"user": 
    {
      "userId":1,
      "username": "3******c",
      "headSrc":"https://pic1.zhimg.com/v2-ba9690274a886065a1d481d8f090da61_xl.jpg",
      "address": "南昌大学学生公寓6#666",
      "phone": "13578889999",
      "account":50
    },
    "orders":[
      {"orderId":39,"userId":1,"sellerId":1,"orderTime":"1524550162577","price":59,"orderType":3},
      {"orderId":38,"userId":1,"sellerId":1,"orderTime":"1524452654956","price":119,"orderType":3},
      {"orderId":37,"userId":1,"sellerId":1,"orderTime":"1524452641093","price":119,"orderType":3},
      {"orderId":36,"userId":1,"sellerId":1,"orderTime":"1524449248934","price":49,"orderType":3},
      {"orderId":35,"userId":1,"sellerId":1,"orderTime":"1524407539363","price":47,"orderType":2},
      {"orderId":34,"userId":1,"sellerId":1,"orderTime":"1524280207889","price":44,"orderType":3},
      {"orderId":33,"userId":1,"sellerId":1,"orderTime":"1524272959204","price":47,"orderType":3},
      {"orderId":32,"userId":1,"sellerId":1,"orderTime":"1524210881069","price":39,"orderType":2},
      {"orderId":31,"userId":1,"sellerId":1,"orderTime":"1524049967396","price":49,"orderType":3},
      {"orderId":30,"userId":1,"sellerId":1,"orderTime":"1523940185167","price":43,"orderType":3},
      {"orderId":29,"userId":1,"sellerId":1,"orderTime":"1523928126387","price":42,"orderType":2},
      {"orderId":28,"userId":1,"sellerId":1,"orderTime":"1523927489338","price":79,"orderType":3},
      {"orderId":27,"userId":1,"sellerId":1,"orderTime":"1523927475002","price":39,"orderType":3},
      {"orderId":26,"userId":1,"sellerId":1,"orderTime":"1523793442986","price":47,"orderType":3},
      {"orderId":25,"userId":1,"sellerId":1,"orderTime":"1523793231930","price":49,"orderType":3}
    ]
  }
Mock.mock('/user', userData);
/*const data = Mock.mock(userData);
export default {
  data
}*/