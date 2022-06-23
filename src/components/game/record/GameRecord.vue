<script lang="ts" setup>
import { PropType } from "vue"

type Record = { name: string, text: string, shoutAt: string }[]

const props = defineProps({
  records: {
    type: Object as PropType<Record>
  }
})
</script>

<template>
  <div class="records">
    <p class="record" v-for="record in props.records">
      <span class="time">{{ record.shoutAt }}</span>
      <span class="user">{{ record.name }}: </span>
      <span class="text">{{ record.text }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.records {
  margin: 0;
  width: 500px;
  height: 80vh;

  .record {
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    height: 50px;
    line-height: 50px;

    .time {
    }

    .user {
      width: 150px;
    }

    .text {
      width: 200px;
      overflow-y: auto;
      white-space: nowrap;
    }
  }
}
</style>