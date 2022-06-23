<script lang="ts" setup>

import { computed, ref } from "vue"

const props = defineProps({
  latest: {
    type: Date,
    required: true
  },
  next: {
    type: String,
    required: true
  },
  myName: {
    type: String,
    required: true
  },
  previousWord: {
    type: String,
    required: true
  }
})


const emit = defineEmits<{
  (event: 'update:modelValue', text: string): string
  (event: 'click'): void
}>()

const input = ref('')

const emitModel = (): void => {
  emit('update:modelValue', input.value)
}

const restSeconds = ref(0)

const isMyTurn = computed(() => props.myName === props.next)

setInterval(() => {
  const elapsedSeconds = Math.round((Date.now() - props.latest.getTime()) / 1000)
  restSeconds.value = 30 - elapsedSeconds
}, 300)

const onClick = () => {
  if (!isMyTurn.value) return
  emit('click')
  input.value = ''
}

</script>

<template>
  <div class="input-form">
    <h1 class="title">しりとり</h1>
    <p class="previous-word">
      <span>前の単語</span>
      <span>{{ props.previousWord }}</span>
    </p>
    <p class="form">
      <input class="input" v-model="input" @input="emitModel" type="text" @keypress.enter="onClick">
      <button :class="{ 'send': true, 'other-turn': !isMyTurn }" @click="onClick">送信</button>
    </p>
    <p class="info">
      <span>{{ isMyTurn ? "あなた" : props.next }}の番</span>
      <span>残り時間: {{ restSeconds }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.input-form {
  width: 450px;

  .title {
    font-size: 70px;
    text-align: center;
    font-weight: lighter;
    margin: 0;
  }

  .previous-word {
    margin: 0;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }

  .form {
    display: flex;
    justify-content: space-between;
    height: 50px;
    .input {
      width: 300px;
      font-size: 30px;
    }


    .send {
      width: 120px;
      font-size: 30px;
      outline: none;
      border: 1px solid black;
      position: relative;

      background-color: white;
      color: black;
      z-index: 1;
      transition: all 0.4s;
      overflow: hidden;

      &.other-turn {
        background-color: gray;
        border: 1px solid black;

        &:hover {
          color: black;
        }
        &:before {
          content: '';
          display: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        display: block;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        z-index: -1;

        transition: all 0.4s;
      }

      &:hover {
        color: white;
        &:before {
          transform: translateX(0);
        }
      }
    }
  }

  .info {
    margin: 0;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
  }
}
</style>