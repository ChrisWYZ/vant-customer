<template>
  <!-- 后台管理总页面 -->
  <div class="manager">
    <!-- 用于接受首页，订单，我 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 导航 -->
    <nav>
      <router-link to="/manager/home">首页</router-link>
      <router-link to="/manager/order">订单</router-link>
      <router-link to="/manager/user">我的</router-link>
    </nav>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {getToken} from '../../utils/auth'
export default {
  created(){
    // 通过token获取用户信息
    let token = getToken();
    if(token){
      this.info(token)
    } else {
      this.$toast("token失效")
      this.$router.push('/login')
    }
  },
  methods:{
    ...mapActions('user',['info'])
  }
}
</script>