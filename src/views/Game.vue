<script lang="ts" setup>
import InputForm from "@/components/game/input/InputForm.vue"
import GameRecord from "@/components/game/record/GameRecord.vue"
import { AxiosInstance } from "axios"
import { computed, PropType, reactive, ref } from "vue"
import { useRouter } from "vue-router"

type Record = { name: string, text: string, shoutAt: string }

type GameData = { records: Record[], lastDate: string, nextPlayer: string, judged: boolean, winner: string }

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
const ws = new WebSocket(props.ws + '/game')

const router = useRouter()

const state = reactive<{ game: GameData }>({
  game: { records: [{ name: '', text: '', shoutAt: ''}], lastDate: new Date().toJSON(), nextPlayer: '', judged: false, winner: '' }
})


const update = async () => {
  state.game = (await props.axios.get<GameData>('/game')).data
  if (state.game.judged) {
    alert(`winner: ${state.game.winner}`)
    ws.close()
    setTimeout(() => router.push('/'), 4000)
  }
}

ws.addEventListener('open', () => {
  update()
})

const username = (await props.axios.get<string>('/login')).data

const previousWord = computed(() => state.game.records[state.game.records.length-1].text)

ws.addEventListener('message', (e) => {
  const json = JSON.parse(e.data)
  switch (json.type) {
    case 'update':
      update()
      break
    default:
      throw Error('異常なWebSocketのmessage')
  }
})

const input = ref('')
const send = () => {
  if (state.game.nextPlayer !== username) return
  props.axios.post('/game', { text: input.value })
}
</script>

<template>
  <div class="game">
    <InputForm
        class="input-form"
        :latest="new Date(state.game.lastDate)"
        :my-name="username"
        :next="state.game.nextPlayer"
        :previous-word="previousWord"
        v-model="input"
        @click="send"
    />
    <GameRecord class="game-record" :records="state.game.records"/>
  </div>
</template>

<style lang="scss" scoped>
.game {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, white, #7FFF70);
  position: relative;

  .input-form {
    position: absolute;
    top: 10px;
    left: 50%;
    transform :translateX(-50%) scale(60%);
  }
  .game-record {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%) scale(60%);
  }

  @media screen and (min-width: 700px)  {
    .input-form {
      top: 50px;
      transform :translateX(-50%);
    }
    .game-record {
      top: 400px;
      transform :translateX(-50%);
    }
  }

  @media screen and (min-width: 1000px)  {
    .input-form {
      top: auto;
      right: auto;
      bottom: 20px;
      left: 20px;
      transform: scale(70%);
    }
    .game-record {
      top: 10px;
      left: auto;
      right: 20px;
      bottom: auto;
      transform: scale(70%);
    }
  }

  @media screen and (min-width: 1200px)  {
    .input-form {
      bottom: 100px;
      left: 100px;
      transform: scale(100%);
    }
    .game-record {
      right: 100px;
      top: 100px;
      transform: scale(100%);
    }
  }
}

</style>