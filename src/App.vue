<script lang="ts" setup>
import Axios from "axios"

const axios = Axios.create({ baseURL: `${location.protocol}//${location.host}/api` })

const ws = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/api`

</script>

<template>
  <suspense>
    <router-view :ws="ws" :axios="axios"/>
  </suspense>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-family: Arial,
  "Helvetica Neue",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  Meiryo,
  sans-serif;
  -webkit-text-size-adjust: 100%;
}
</style>