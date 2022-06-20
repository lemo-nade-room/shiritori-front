<script lang="ts" setup>
import IceFlower from '@/components/decolations/ice-flower/IceFlower.vue'
import LoginForm from '@/components/login-form/LoginForm.vue'


</script>
<template>
  <div class="login">
    <div class="form">
      <LoginForm/>
    </div>
    <div class="flower">
      <IceFlower/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #8FF6FF, #FFF);
  padding-top: 40px;
  .form {
    margin: 0 auto;
  }
}

@media screen and (max-width: 339px) {
  .login {
    .form {
      transform: scale(90%);
    }
    .flower {
      transform: scale(80%);
    }
  }
}

@media screen and (min-width:768px) {
  .login {
    position: relative;
    .flower {
      position: absolute;
      left: 170px;
      top: -40px;
      transform: scale(150%);
    }
    .form {
      position: absolute;
      top: 150px;
      right: 25px;
      transform: scale(110%);
    }
  }
}

@media screen and (min-width:1023px) {
  .login {
    .flower {
      top: -30px;
      transform: scale(115%);
    }
    .form {
      top: 100px;
      right: 80px;
      transform: scale(100%);
    }
  }
}

@media screen and (min-width: 1150px) {
  .login {
    .flower {
      top: -30px;
      left: 250px;
      transform: scale(140%);
    }
    .form {
      top: 150px;
      right: 120px;
      transform: scale(110%);
    }
  }
}
</style>