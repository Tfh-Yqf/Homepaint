/**
 * 封装的异步请求处理函数
 * 使用方法为:
 * request('接口名称',{key:value},'请求方式(默认为GET)')
 * .then(res=>{console.log(res)})
 */
import { getToken, removeToken } from "./auth";
let baseUrl = '';
async function request(mehtod, params, type, callBack) {
  //创建一个名为request请求的方法函数
  if (!type) {
    type = 'GET';
  }
  let header = {
    //设置请求头信息
    // 'Authorization': getToken(),
    'X-Requested-With': 'XMLHttpRequest',
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8",
	// "token":uni.getStorageSync('token'),
	'Access-Control-Allow-Origin':'*',
	// "token":"d109cd10-d3e5-4338-821c-823798c4e4d7",
	// "token":"3a2a91a9-43ef-424b-98f7-ca97054c4376",
	"token":"783285b1-84ac-49cf-9dcb-2981d67d63a9"
  };
  let http = {
    url: mehtod,
    data: params,
    method: type,
    header: header
  };
  let promise = new Promise((resolve, reject) => {
    uni.request(http).then(res => {
      let newdata = res[1].data;

      if (newdata.code!=0) {
        //如果错误码为 -1 提示
        // uni.showToast({
        //   title: newdata.msg,
        //   icon: 'none'
        // });
      }
      resolve(res[1].data);
    }).catch(err => {
      reject(err);
      console.log(err);
    });
  });
  return promise;
}
export default {
  request
};