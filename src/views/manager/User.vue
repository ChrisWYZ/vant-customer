<template>
  <div class="user">
    我的页面
    <p>{{info}}</p>
    <p>token:{{token}}</p>
    <div @click="logoutHandler">
      退出
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState('user',['info','token'])
  },
  methods:{
    ...mapActions('user',['logout']),
    logoutHandler(){
      // 1. 退出
      this.logout()
      .then(()=>{
        // 2. 跳转到登录
        this.$router.push({path:"/login"})
      })
    }
  }
}
</script>