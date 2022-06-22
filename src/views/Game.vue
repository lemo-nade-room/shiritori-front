<script lang="ts" setup>
import InputForm from "@/components/game/input/InputForm.vue"
import GameRecord from "@/components/game/record/GameRecord.vue"

defineProps({
  ws: String,
  axios: Function
})
</script>

<template>
  <div class="game">
    <InputForm class="input-form"/>
    <GameRecord class="game-record"/>
  </div>
</template>

<style lang="scss" scoped>
.game {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, white, #7FFF70);
  position: relative;

  .input-form {
    position: absolute;
    top: 10px;
    left: 50%;
    transform :translateX(-50%) scale(60%);
  }
  .game-record {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%) scale(60%);
  }

  @media screen and (min-width: 700px)  {
    .input-form {
      top: 50px;
      transform :translateX(-50%);
    }
    .game-record {
      top: 400px;
      transform :translateX(-50%);
    }
  }

  @media screen and (min-width: 1000px)  {
    .input-form {
      top: auto;
      right: auto;
      bottom: 20px;
      left: 20px;
      transform: scale(70%);
    }
    .game-record {
      top: 10px;
      left: auto;
      right: 20px;
      bottom: auto;
      transform: scale(70%);
    }
  }

  @media screen and (min-width: 1200px)  {
    .input-form {
      bottom: 100px;
      left: 100px;
      transform: scale(100%);
    }
    .game-record {
      right: 100px;
      top: 100px;
      transform: scale(100%);
    }
  }


  //.input-form {
  //
  //  @media screen and (max-width: 1300px)  {
  //    bottom: 50px;
  //    left: 20px;
  //    transform: scale(70%);
  //  }
  //
  //  @media screen and (max-width: 800px)  {
  //    position: relative;
  //    margin: 0 auto;
  //    transform: scale(70%);
  //  }
  //}
  //.game-record {
  //  @media screen and (min-width: 800px)  {
  //    position: absolute;
  //    top: 100px;
  //    right: 150px
  //  }
  //
  //  @media screen and (max-width: 1300px)  {
  //    top: 50px;
  //    right: 20px;
  //    transform: scale(70%);
  //  }
  //
  //  @media screen and (max-width: 800px)  {
  //    position: relative;
  //    margin: 0 auto;
  //    transform: scale(70%);
  //  }
  //
  //  @media screen and (max-width: 500px)  {
  //    transform: scale(60%);
  //  }
  //
  //  @media screen and (max-width: 400px)  {
  //    transform: scale(40%);
  //  }
  //}
  //
  //

}

</style>