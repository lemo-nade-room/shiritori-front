<script lang="ts" setup>
import LoginFormButton from '@/components/login-form/button/LoginFormButton.vue'
import LoginFormInput from '@/components/login-form/input/LoginFormInput.vue'
import { AxiosInstance } from "axios"
import { PropType, ref } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
  axios: {
    type: Function as PropType<AxiosInstance>,
    required: true
  }
})

const input = ref('')

const router = useRouter()

const login = async () => {
  if (input.value === '') return
  await props.axios.post('/login', {username: input.value})
  await router.push('/')
}


</script>

<template>
<form class="form">
  <h1 class="title">Login</h1>
  <LoginFormInput placeholder="なまえ" v-model="input"/>
  <div class="buttons">
    <LoginFormButton class="button" text="ログイン" @click="login"/>
  </div>
</form>
</template>

<style lang="scss" scoped>
.form {
  width: 280px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .title {
    margin: 0;
    text-align: center;
    font-weight: lighter;
    color: white;
    font-size: 60px;
    -webkit-text-stroke: 0.3px black;
  }

  .buttons {
    width: 100%;
    position: relative;
    align-items: center;

    .button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>