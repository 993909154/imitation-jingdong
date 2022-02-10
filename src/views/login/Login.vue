<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper_img">
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="用户名" v-model="username">
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" type="password" placeholder="请输入密码" v-model="password" autocomplete="new-password">
    </div>
    <div class="wrapper_login_button" @click="handleLogin">登录</div>
    <div class="wrapper_login_link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const { username, password } = data
      if (username !== '' && password !== '') {
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          showToast('登录失败')
        }
      } else {
        showToast('账号密码不能为空')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const {
    username,
    password
  } = toRefs(data)
  return {
    username,
    password,
    handleLogin
  }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const {
      toastMessage,
      show,
      showToast
    } = useToastEffect()
    const {
      username,
      password,
      handleLogin
    } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    return {
      handleLogin,
      handleRegisterClick,
      username,
      password,
      toastMessage,
      show
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &_img {
    display: block;
    margin: 0 auto .4rem;
    width: .66rem;
    height: .66rem;
  }

  &_input {
    height: .48rem;
    margin: 0 .4rem .16rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    box-sizing: border-box;
    border: .01rem solid rgba(0, 0, 0, 0.10);
    border-radius: 6px;

    &_content {
      border: none;
      outline: none;
      line-height: .48rem;
      width: 100%;
      background: none;
      color: $content-notice-fontcolor;
      font-size: .16rem;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &_login {
    &_button {
      height: .48rem;
      margin: .32rem .4rem .16rem;
      background: #0091FF;
      box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
      border-radius: .04rem;
      font-size: .16rem;
      color: #FFFFFF;
      text-align: center;
      line-height: .48rem;
    }

    &_link {
      font-size: .14rem;
      color: $content-notice-fontcolor;
      text-align: center;
    }
  }
}
</style>
