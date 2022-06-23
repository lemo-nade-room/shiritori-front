<script lang="ts" setup>

import {ref} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
})

type EmitType = (event: 'update:modelValue', text: string) => string
const emit = defineEmits<EmitType>()
const inputValue = ref('')
const emitModelValue = () => emit('update:modelValue', inputValue.value)
</script>

<template>
  <input
      class="input"
      type="text"
      :placeholder="props.placeholder"
      v-model="inputValue"
      @input="emitModelValue"
      autocomplete="on"
  >
</template>

<style lang="scss" scoped>
$border: 0.3px solid black;
.input {
  width: 260px;
  height: 34px;
  border: $border;
  border-radius: 7px;
  padding-left: 10px;

  font-size: 27px;

  &:focus {
    outline: none;
  }
}
</style>