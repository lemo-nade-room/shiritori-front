<template>
  <div class="input-form">
    <h1 class="title">しりとり</h1>
    <p class="previous-word">
      <span>前の単語</span>
      <span>こんにちは</span>
    </p>
    <p class="form">
      <input class="input" type="text">
      <button class="send">送信</button>
    </p>
    <p class="info">
      <span>相手の番</span>
      <span>残り時間: 11</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.input-form {
  width: 450px;

  .title {
    font-size: 70px;
    text-align: center;
    font-weight: lighter;
    margin: 0;
  }

  .previous-word {
    margin: 0;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }

  .form {
    display: flex;
    justify-content: space-between;
    height: 50px;
    .input {
      width: 300px;
      font-size: 30px;
    }
    .send {
      width: 120px;
      font-size: 30px;
      outline: none;
      border: 1px solid black;
      position: relative;

      background-color: white;
      color: black;
      z-index: 1;
      transition: all 0.4s;
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        display: block;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        z-index: -1;

        transition: all 0.4s;
      }

      &:hover {
        color: white;
        &:before {
          transform: translateX(0);
        }
      }
    }
  }

  .info {
    margin: 0;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
  }
}
</style>