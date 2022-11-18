<template>
  <div class="body">
    <form class="login-container" autocomplete="off">
      <h1>登 录</h1>

      <div class="user">
        <!-- 用户名 -->
        <div>
          <label for="username">
            <s-svg icon="icon-geren1" class="icon"></s-svg>
          </label>
          <input type="text" id="username" placeholder="请输入用户名" />
        </div>

        <!-- 密码 -->
        <div>
          <label for="password">
            <s-svg icon="icon-mima" class="icon"></s-svg>
          </label>
          <input type="password" id="password" placeholder="请输入密码" />
        </div>

        <!-- 按钮组 -->
        <s-button :span="4">登录</s-button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'LoginIndex',
  data () {
    return {
      profile: {
        username: 'root',
        password: '123456'
      }
    }
  },
  created () {
    login(this.profile).then((data) => {
      console.log(data)
    })
  }
}
</script>

<style scoped lang="less">
label {
  cursor: pointer;
}
.body {
  width: 100%;
  height: 100vh;
  background: #0476d0;
  position: relative;
  overflow: hidden;
  // text-align: center;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -500px;
    left: -500px;
    width: 1000px;
    height: 1000px;
    background-color: rgb(52, 99, 100);
    border-radius: 50%;
    z-index: 0;
    box-shadow: 30px 10px rgb(125, 157, 213);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -500px;
    right: -500px;
    width: 1000px;
    height: 1000px;
    background-color: rgb(77, 56, 100);
    border-radius: 50%;
    z-index: 0;
    box-shadow: -30px -10px rgb(166, 182, 211);
  }
  .login-container {
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    background-color: #a6b6d3;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.6);
    padding-top: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    h1 {
      margin-bottom: 20px;
    }

    .user {
      text-align: center;
      .icon {
        padding-right: 5px;
      }
    }
    input {
      width: 400px;
      height: 45px;
      border-radius: 5px;
      margin: 10px 0;
      border: 1px solid #c3c3c4;
      background-color: #eef0f5;
      font-size: 16px;
      padding-left: 10px;
    }
  }
}
</style>
