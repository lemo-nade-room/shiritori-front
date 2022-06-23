<script lang="ts" setup>
import IcePetal from './petal/IcePetal.vue'
import {ref} from "vue";
import {createOpenCloseStyle} from "@/components/style-models/ComponentService";
import OpenCloseStyle from "@/components/style-models/open-close-style/OpenCloseStyle";


const iceFlowerStyle = ref<OpenCloseStyle>(
    createOpenCloseStyle(
        false,
        ['ice-flower'],
        [],
        ['closed']
    )
)

const open = async (): Promise<void> => {
  iceFlowerStyle.value = await iceFlowerStyle.value.waitOpen()
}
</script>

<template>
  <transition @after-enter="open" appear>
    <div :class="iceFlowerStyle.style">
      <div class="petal-joint" v-for="i in 4" :key="i">
        <IcePetal class="petal"/>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
$width: 111px;
$height: 212px;

.ice-flower {
  position: relative;
  .petal-joint {
    position: absolute;
    width: $width;
    height: $height;

    @for $i from 0 to 4 {
      &:nth-of-type(#{$i}) {
        transform-origin: bottom;
        transform: rotate($i * 90deg);
        transition: 1s all ease;
      }
    }
  }
  &.closed {
    .petal-joint {
      transform: rotate(0);
      opacity: 0.3;
    }
  }
}
</style>