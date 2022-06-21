<script lang="ts" setup>

import { PropType, Ref, ref } from "vue"
import { AxiosInstance } from "axios"

const props = defineProps({
  ws: {
    type: String,
    required: true
  },
  axios: {
    type: Function as PropType<AxiosInstance>,
    required: true
  },
})


const ws = new WebSocket(props.ws + '/matching')
const users: Ref<{ username: string, ws: string }[]> = ref([])
let myId = ''

const myIdMessage = (me: {type: 'you', ws: string}) => {
  myId = me.ws
}

const updateUsers = (json: {type: 'broadcast', users: { username: string, ws: string }[] }) => {
  users.value = json.users.filter(user => user.ws !== myId)
}

ws.addEventListener('open', () => {
  ws.addEventListener('message', (e) => {
    const json = JSON.parse(e.data)
    switch (json.type) {
      case 'you':
        myIdMessage(json)
        break
      case 'broadcast':
        updateUsers(json)
        break
      default:
        throw new Error('Invalid message')
    }
  })
})
</script>

<template>
<div>
  <h1>相手を探し中</h1>
  <ul>
    <li v-for="user in users">{{ user.username }}</li>
  </ul>
</div>
</template>



<style scoped>

</style>