import {post_json,get,post} from '../../http/axios'
import {getToken,setToken,removeToken} from '../../utils/auth'
export default {
  namespaced:true,
  state:{
    //0. token的初始化值为本地缓存中保存的token信息
    token:getToken(),
    info:{}
  },
  mutations:{
    refreshToken(state,token){
      state.token = token;
    },
    refreshInfo(state,info){
      state.info = info;
    }
  },
  actions:{
    // 登录
    async login(context,payload){
      let response = await post_json("/user/login",payload);
      let token = response.data.token;
      // 0. 将token设置到状态机
      context.commit('refreshToken',token);
      // 1. token缓存到本地
      setToken(token)
    },
    // 通过token获取用户基本信息
    async info(context,token){
      let response = await get("/user/info",{token});
      context.commit("refreshInfo",response.data);
    },
    // 退出
    async logout(context){
      // 1. 请求后台退出
      await post("/user/logout");
      // 2. 移除本地缓存中的token
      removeToken();
      // 3. 移除状态机中的token以及info
      context.commit("refreshInfo",null);
      context.commit("refreshToken","");
    }
  }
}