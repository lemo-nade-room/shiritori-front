<script lang="ts" setup>

import { PropType, ref } from "vue"
import { AxiosInstance, AxiosError } from "axios"
import { useRouter } from "vue-router"

const props = defineProps({
  axios: {
    type: Function as PropType<AxiosInstance>,
    required: true
  }
})

const name = ref('')

const router = useRouter()

try {
  name.value = (await props.axios.get('/login')).data
} catch (e) {
  const err = e as AxiosError
  const status = err.response?.status
  if (status === 401) router.push('/login')
}


</script>

<template>
  こんにちは {{ name }}さん
</template>

<style scoped>

</style>