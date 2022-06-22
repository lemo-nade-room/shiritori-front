<script lang="ts" setup>
const records = [
  { time: '12:24:20', user: 'たなか', text: 'こんにちは' },
  { time: '12:24:01', user: 'しましま', text: 'はんだごて' },
  { time: '12:23:22', user: 'たなか', text: 'てらばいと' },
  { time: '12:23:03', user: 'しましま', text: 'とーますあああああああああああああああああああああああああああ' },
  { time: '12:22:54', user: 'たなか', text: 'すいかわり' },
  { time: '12:22:00', user: 'しましま', text: 'りきゅう' },
]
</script>

<template>
  <div class="records">
    <p class="record" v-for="record in records">
      <span class="time">{{ record.time }}</span>
      <span class="user">{{ record.user }}: </span>
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