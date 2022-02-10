<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper_img">
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" type="password" placeholder="请输入密码" autocomplete="new-password"
             v-model="password">
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" type="password" placeholder="确认密码" v-model="checkPassword">
    </div>
    <div class="wrapper_register_button" @click="handleRegister">注册</div>
    <div class="wrapper_register_link" @click="handleLoginClick">已有账号去登陆</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    checkPassword: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password,
        checkPassword: data.checkPassword
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const {
    username,
    password,
    checkPassword
  } = toRefs(data)
  return {
    username,
    password,
    checkPassword,
    handleRegister
  }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
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
      checkPassword,
      handleRegister
    } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return {
      toastMessage,
      show,
      username,
      password,
      checkPassword,
      handleRegister,
      handleLoginClick
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

  &_register {
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
