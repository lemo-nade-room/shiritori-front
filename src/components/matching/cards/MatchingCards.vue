<script lang="ts" setup>
import MatchingCard from '@/components/matching/card/MatchingCard.vue'

const props = defineProps({
  users: {
    type: Object,// build通すよう
    required: true
  }
})

const emits = defineEmits<{
  (e: 'offer', id: string): void
  (e: 'reply', id: string, reply: 'accept' | 'deny'): void
  (e: 'withdraw', id: string): void
}>()

const offer = (id: string) => emits('offer', id)
const reply = (id: string, reply: 'accept' | 'deny') => emits('reply', id, reply)
const withdraw = (id: string) => emits('withdraw', id)


</script>

<template>
  <div class="cards">
    <MatchingCard
        v-for="user in props.users"
        :user="user"
        :key="user.id"
        class="card"
        @offer="offer"
        @reply="reply"
        @withdraw="withdraw"
    />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  &:after {
    content: '';
    display: block;
    width: 360px;
  }
}

@media screen and (max-width: 420px) {
  .cards {
    transform: scale(80%);
  }
}
</style>