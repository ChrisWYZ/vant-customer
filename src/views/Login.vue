<template>
  <div class="login">
    <!-- 头部 -->
    <header class="header">
      <div class="logo">
        jz
      </div>
      <div class="title">
        家政服务平台-员工端
      </div>
    </header>
    <!-- 表单 -->
    <article class="content">
      {{form}}
      <van-cell-group>
        <van-field
          v-model="form.username"
          required
          clearable
          label="用户名"
          icon="question-o"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      
      <div style="padding:1em 2em">
        <van-button round style="width:100%" @click="loginHandler">登录</van-button>
      </div>
    </article>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:'waiter'
      }
    }
  },
  methods:{
    ...mapActions('user',['login']),
    loginHandler(){
      this.login(this.form)
      .then(()=>{
        this.$router.push('/manager/home')
      })
    }
  }
}
</script>
<style scoped>
.header {
  padding: 50px 0;
  text-align: center;
  background: pink;
  color: #efefef;
}
.header .logo{
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #efefef;
  border-radius: 50%;
  margin: 0 auto;
}
.header .title {
  font-size: 24px;
  line-height: 2em;
}
</style>