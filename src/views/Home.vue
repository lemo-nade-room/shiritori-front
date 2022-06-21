<script lang="ts" setup>

import { PropType, ref } from "vue"
import { AxiosInstance } from "axios"
import { useRouter } from "vue-router"

const props = defineProps({
  axios: {
    type: Function as PropType<AxiosInstance>,
    required: true
  }
})

const name = ref('')

const router = useRouter()
name.value = (await props.axios.get('/login')).data
</script>

<template>
  <div>
    こんにちは {{ name }}さん
    <router-link to="/matching">対戦相手を探す</router-link>
  </div>

</template>

<style lang="scss" scoped>

</style>