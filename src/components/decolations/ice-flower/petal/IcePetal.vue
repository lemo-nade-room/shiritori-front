<template>
  <div class="ice-petal">
    <div class="tip"></div>
    <div class="break"></div>
    <div class="root"></div>
  </div>
</template>

<style lang="scss" scoped>
$width: 111px;
$height: 201px;
$diagonal: $width * 0.70710678;

$color: #FFC4EC;

.ice-petal {
  width: $width;
  height: $height;
  position: relative;

  .tip {
    border-right: 55px solid transparent;
    border-bottom: 151px solid $color;
    border-left: 55px solid transparent;
    border-radius: 10px;
    z-index: 1;
  }

  .break {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;

    border-right: 7px solid transparent;
    border-bottom: 110px solid #ABFFFD;
    border-left: 7px solid transparent;
    border-radius: 0;
    z-index: 3;
  }

  .root {
    width: $diagonal;
    height: $diagonal;
    position: absolute;
    left: 16px;
    bottom: 16px;
    border-radius: 7px;
    background-color: $color;
    transform: rotate(45deg);
    z-index: 2;
  }
}
</style>