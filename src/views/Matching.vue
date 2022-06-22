<script lang="ts" setup>

import { PropType, reactive } from "vue"
import { AxiosInstance } from "axios"
import { MatchingUserCollection } from "@/components/matching/cards/models/matchingUserCollection"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"
import MatchingCards from '@/components/matching/cards/MatchingCards.vue'
import { useRouter } from "vue-router"

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



const fetchUsers = await props.axios.get<{ users: { id: string, name: string }[] }>('/matching')

const state = reactive({
  users: MatchingUserCollection.make(fetchUsers.data.users)
})

// test
// const state = reactive({
//   users: new MatchingUserCollection([
//       MatchingUser.initActive('tanaka', 'たなか').active,
//       MatchingUser.initActive('nakata', 'なかた').offered,
//       MatchingUser.initActive('takeda', 'たけだ').active,
//   ])
// })
//
const ws = new WebSocket(props.ws + '/matching')

const router = useRouter()

const addUser = (json: { type: 'add', user: { id: string, name: string } }) => {
  state.users = state.users.added(MatchingUser.initActive(json.user.id, json.user.name))
}

const offered = (json: { type: 'offered', id: string }) => {
  state.users = state.users.offered(json.id)
}

const canceled = (json: { type: 'canceled', id: string }) => {
  state.users = state.users.canceled(json.id)
}

const outed = (json: { type: 'outed', id: string }) => {
  state.users = state.users.outed(json.id)
}

const offer = async (id: string) => {
  await props.axios.post('/matching', { id: id })
  state.users = state.users.offer(id)
}

const withdraw = async (id: string) => {
  console.log('clicked withdraw')
  await props.axios.delete(`/matching/${id}`)
  state.users = state.users.withdrawn()
}

const reply = async (id: string, reply: 'accept' | 'deny') => {
  ws.send(JSON.stringify({id: id, reply: reply}))
  if (reply === 'accept') {
    await router.push('/game')
    return
  }
  state.users = state.users.deny(id)
}

const denied = () => {
  state.users = state.users.denied()
}

const match = async (json: { type: 'match', room: string }) => {
  await props.axios.post(`/register/${json.room}`)
  await router.push('/game')
}

ws.addEventListener('open', () => {
  ws.addEventListener('message', (e) => {
    const json = JSON.parse(e.data)
    switch (json.type) {
      case 'add':
        addUser(json)
        break
      case 'offered':
        offered(json)
        break
      case 'canceled':
        canceled(json)
        break
      case 'outed':
        outed(json)
        break
      case 'denied':
        console.log('denied ws')
        denied()
        break
      case 'match':
        match(json)
        break
      default:
        console.log(json.type)
        throw new Error('Invalid message')
    }
  })
})
</script>

<template>
  <div class="matching">
    <MatchingCards :users="state.users" @offer="offer" @withdraw="withdraw" @reply="reply"/>
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