<script lang="ts" setup>

import { PropType, Ref, ref } from "vue"
import { AxiosInstance } from "axios"
import { MatchingUserCollection } from "@/components/matching/cards/models/matchingUserCollection"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"
import { MatchingUserStatus } from "@/components/matching/card/models/matchingUserStatus"
import MatchingCards from '@/components/matching/cards/MatchingCards.vue'

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

//
// const ws = new WebSocket(props.ws + '/matching')
// const users: Ref<{ username: string, ws: string }[]> = ref([])
// let myId = ''
//
// const myIdMessage = (me: {type: 'you', ws: string}) => {
//   myId = me.ws
// }
//
// const updateUsers = (json: {type: 'broadcast', users: { username: string, ws: string }[] }) => {
//   users.value = json.users.filter(user => user.ws !== myId)
// }
//
// ws.addEventListener('open', () => {
//   ws.addEventListener('message', (e) => {
//     const json = JSON.parse(e.data)
//     switch (json.type) {
//       case 'you':
//         myIdMessage(json)
//         break
//       case 'broadcast':
//         updateUsers(json)
//         break
//       default:
//         throw new Error('Invalid message')
//     }
//   })
// })
const userList = new MatchingUserCollection([
  new MatchingUser('たなか', MatchingUserStatus.offering),
  new MatchingUser('なかた', MatchingUserStatus.nonActive),
  new MatchingUser('たけだ', MatchingUserStatus.nonActive),
  new MatchingUser('snoopy', MatchingUserStatus.active),
  new MatchingUser('しましま', MatchingUserStatus.offered),
])
</script>

<template>
  <div class="matching">
    <MatchingCards :users="userList"/>
  </div>
</template>



<style lang="scss" scoped>
.matching {
  background-color: #D1FFD4;
  width: 100vw;
  height: 100vh;

  overflow: scroll;
}
</style>