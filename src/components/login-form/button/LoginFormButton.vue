<script lang="ts" setup>


const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  }
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

</script>

<template>
  <button class="btn" type="button" @click="emit('click')">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  width: 130px;
  height: 45px;
  padding: 0;
  font-size: 23px;
  border: 0.3px solid black;
  border-radius: 10px;
  color: white;
  background-color: #87efb8;
}
</style>