<script lang="ts" setup>
import MatchingCard from '@/components/matching/card/MatchingCard.vue'
import { PropType } from "vue"
import { MatchingUserCollection } from "@/components/matching/cards/models/matchingUserCollection"

const props = defineProps({
  users: {
    type: Object as PropType<MatchingUserCollection>,
    required: true
  }
})
</script>

<template>
  <div class="cards">
    <MatchingCard
        v-for="user in props.users"
        :user="user"
        :key="user"
        class="card"
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