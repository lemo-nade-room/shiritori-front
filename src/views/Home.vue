<script lang="ts" setup>
defineProps({
  ws: String,
  axios: Function
})
</script>

<template>
  <div class="home">
    <button class="btn first">戦績</button>
    <button class="btn second">対戦</button>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #EBEBEB, #FFE76A);

  .btn {
    display: block;
    width: 400px;
    height: 160px;
    font-size: 80px;
    border: none;
    outline: none;
    border-radius: 40px;
    background: linear-gradient(135deg, #D4D4D4, #FFFFFF);
  }
}

@media screen and (max-width: 420px) {
  .home {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .btn {
      margin: 0 auto;
      width: 300px;
      height: 120px;
    }
  }
}
@media screen and (min-width: 421px) {
  .home {
    position: relative;
    .btn {
      &.first {
        position: absolute;
        right: 10vw;
        top: 25vh;
      }
      &.second {
        position: absolute;
        left: 10vw;
        bottom: 25vh;
      }
    }
  }
}
</style>