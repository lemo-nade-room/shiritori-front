<script lang="ts" setup>
import { PropType } from "vue"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"

const props = defineProps({
  user: {
    type: Object as PropType<MatchingUser>,
    required: true
  }
})

const emits = defineEmits<{
  (e: 'offer', id: string): void
  (e: 'reply', id: string, reply: 'accept' | 'deny'): void
  (e: 'withdraw', id: string): void
}>()
</script>

<template>
  <div class="card">
    <div class="content">
      {{ props.user.name }}
    </div>

    <div class="buttons" v-if="props.user.status.status === 'active'">
      <button class="offer btn" @click="emits('offer', props.user.id)">申し込む</button>
    </div>

    <div class="buttons" v-if="props.user.status.status === 'offered'">
      <button class="deny btn" @click="emits('reply', props.user.id, 'deny')">拒否</button>
      <button class="accept btn" @click="emits('reply', props.user.id, 'accept')">承諾</button>
    </div>

    <div class="buttons" v-if="props.user.status.status === 'offering'">
      <button class="offering btn">申請中</button>
      <button class="cancel btn" @click="emits('withdraw', props.user.id)"><span class="cross"/></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$height: 100px;
$width: 300px;
$padding: 10px;

.card {
  position: relative;

  width: $width + 40px;
  height: $height;

  padding: $padding;

  background-color: #C5B261;

  margin-top: 50px;

  .content {
    width: $width;
    height: $height;

    font-size: 50px;
    font-weight: lighter;

    text-align: center;
    line-height: $height;

    position: relative;
    margin-left: auto;

    background-color: white;
  }
}

.buttons {

  &>.btn {
    display: block;
    height: 40px;
    line-height: 25px;
    font-size:25px;
    outline: none;
    border: none;

    &.offer {
      width: 120px;
      background-color: black;
      color: white;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(10%, 30%);
    }

    &.deny {
      width: 100px;
      background-color: #FF4E00;
      color: white;
      position: absolute;
      bottom: -10px;
      right: 100px;
    }

    &.accept {
      width: 100px;
      background-color: #007CFF;
      color: white;
      position: absolute;
      bottom: -10px;
      right: -10px;
    }

    &.offering {
      width: 150px;
      background-color: white;
      color: black;
      border: 1px solid black;
      position: absolute;
      bottom: -10px;
      right: -10px;
    }

    &.cancel {
      display: block;
      width: 30px;
      height: 30px;
      padding: 0;
      position: absolute;
      bottom: 10px;
      right: -15px;
      background-color: transparent;

      &>.cross {

        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        $width: 49px;

        &:before {
          content: '';

          display: block;
          width: $width;
          height: 5px;

          position: absolute;
          left: 0;
          top: 0;
          transform-origin: top left;
          transform: translateY(-100%) rotate(45deg);
          background-color: red;
        }

        &:after {
          content: '';

          display: block;
          width: $width;
          height: 5px;

          position: absolute;
          right: 0;
          top: 0;
          transform-origin: top right;
          transform: translateY(-100%) rotate(-45deg);
          background-color: red;
        }
      }
    }
  }


}
</style>